import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { Test }   from './test';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, Test ],
    bootstrap: [ AppComponent, Test ]
})

export class AppModule {
}
