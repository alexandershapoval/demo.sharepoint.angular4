import { enableProdMode } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module'

import './styles.scss'

if (process.env.ENV === 'production') {
    enableProdMode();
}

document.addEventListener('DOMContentLoaded', _ => {
    platformBrowserDynamic().bootstrapModule(AppModule)
});