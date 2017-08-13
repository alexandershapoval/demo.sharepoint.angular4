import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ITask, ITaskPage } from '../models/task';

export class TaskService {

    private spHostUrl: string;
    private clientContext: SP.ClientContext;
    private appContext: SP.AppContextSite;

    private listName = "Tasks";
    private listContext: SP.List;
    
    constructor() {
        SP.SOD.executeFunc('sp.js', 'SP.ClientContext', () => {
            this.spHostUrl = GetUrlKeyValue('SPHostUrl');
            this.clientContext = SP.ClientContext.get_current();
            this.appContext = new SP.AppContextSite(this.clientContext, this.spHostUrl);
        });
    }

    public getTasks(): Observable<ITaskPage> {

        let taskPage = new Subject<ITaskPage>();
        let self = this; 
        let caml = SP.CamlQuery.createAllItemsQuery();

        this.listContext = this.appContext.get_web().get_lists().getByTitle(this.listName);

        let listItems = self.listContext.getItems(caml);
        self.clientContext.load(listItems);

        self.clientContext.executeQueryAsync(
            () => {
                let resultTasks: ITask[] = [];

                for (let index = 0; index < listItems.get_count(); index++) {
                    let item = listItems.get_item(index);
                    let fieldValues = item.get_fieldValues();

                    resultTasks.push({
                        Id: fieldValues.ID,
                        Title: fieldValues.Title,
                        Status: fieldValues.Status
                    });
                }

                taskPage.next({ tasks: resultTasks } );
                taskPage.complete();
            },
            (sender: any, args: SP.ClientRequestFailedEventArgs) => {

                console.log("Task Service error: ", args);
            }
        );

        return taskPage.asObservable();
    }
}