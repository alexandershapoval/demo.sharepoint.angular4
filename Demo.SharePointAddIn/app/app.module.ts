import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-2-data-table';

import { AppComponent } from './components/app.component';
import { TasklistModule } from './components/tasklist';
import { SharedComponents } from './shared/components/shared-components.module';

@NgModule({
    imports: [
        NgbModule,
        BrowserModule,
        HttpModule,
        DataTableModule,
        TasklistModule,
        SharedComponents
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }