import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponents } from '../../shared/components';
import { TaskService } from '../../shared/services/task.service';
import { TasklistComponent } from './tasklist-root/tasklist.component';
import { DataTableModule } from 'angular-2-data-table';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        SharedComponents,
        DataTableModule
    ],
    exports: [
        TasklistComponent
    ],
    declarations: [
        TasklistComponent
    ],
    entryComponents: [
    ],
    providers: [
        TaskService
    ],
})
export class TasklistModule { }