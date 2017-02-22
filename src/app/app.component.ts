import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-root',
	templateUrl: `./app.component.html`,
})
export class AppComponent {
	name = 'Angular 2+';
	constructor( @Inject(ActivatedRoute) public route: ActivatedRoute) {
		console.log(this.route);
	}
}
