import { Component, OnInit } from '@angular/core'
import { Observable } from "rxjs";

import { TasklistModel } from "../shared/services/tasklist/tasklist.model"
import { TaskService } from "../shared/services/task.service";
import { ITask, ITaskPage } from "../shared/models/task";

@Component({
    selector: 'demo-app',
    template: require('./app.html'),
    providers: [TasklistModel, TaskService]
})
export class AppComponent implements OnInit {
    page: Observable<ITaskPage>;

    constructor(private tasklistModel: TasklistModel) { }

    ngOnInit() {
        this.page = this.tasklistModel.get();
    }
}