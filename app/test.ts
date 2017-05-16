import { Component } from '@angular/core';

@Component({
    selector: 'test',
    template: `
        <h1>doifjdjo</h1>
        <h2>My favorite hero is: {{myHero}}</h2>
    `
})

export class Test {
    title = 'hello';

    myHero = 'Windstorm';
}
