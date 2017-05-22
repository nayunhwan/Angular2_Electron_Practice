import { Component } from '@angular/core';
import { NgSemanticModule } from 'ng-semantic';

@Component({
    selector: 'test',
    template: `
        <h1>TEST</h1>
    `
})

export class Test {
    title = 'hello';

    myHero = 'Windstorm';
}
