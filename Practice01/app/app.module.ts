import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from "./hero.service";
import { Test } from './test';

import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: 'test', component: Test },
];

@NgModule({
    imports: [ HttpModule, BrowserModule, FormsModule, RouterModule.forRoot([
        { path: '', redirectTo: '/test', pathMatch: 'full' },
        { path: 'heroes', component: HeroesComponent },
        { path: 'test', component: Test }
    ])],
    declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, Test ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
}
