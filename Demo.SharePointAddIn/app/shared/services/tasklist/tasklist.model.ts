import { Injectable } from '@angular/core'
import { TaskService } from '../task.service'
import { Observable } from "rxjs";
import { ITaskPage } from "../../models/task";

@Injectable()
export class TasklistModel {
    constructor(private taskService: TaskService) { }

    public get(): Observable<ITaskPage> {
        return this.taskService.getTasks()
    }
}