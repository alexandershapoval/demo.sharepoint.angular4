import './tasklist.scss'

import { Component, Input, Output, AfterViewChecked, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask, ITaskPage } from "../../../shared/models/task";
import { DataTableResource } from 'angular-2-data-table';

@Component({
    selector: 'tasklist',
    template: require('./tasklist.html')
})
export class TasklistComponent implements AfterViewChecked, OnChanges {
    @Input() tasks: ITask[];
    itemResource = new DataTableResource(this.tasks);
    itemCount = 0;
    items: ITask[];

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params: any) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent: any) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent: any) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item: any) { return item.Title; }

    ngOnChanges(changes: any) {
    }

    ngAfterViewChecked() {
    }
}