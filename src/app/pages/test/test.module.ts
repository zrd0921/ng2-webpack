import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './test.router';
import { PagesTestComponent } from './test.component';

import { MainComponent } from './main/main.component';
import { MainTextComponent } from './main/components/text/text.component';

import { SecondComponent } from './second/second.component';

@NgModule({
	imports: [
		CommonModule,
		routing
	],
	declarations: [
		PagesTestComponent,
		MainComponent,
		MainTextComponent,
		SecondComponent
	],
	// exports: [PagesTestComponent]
	// providers: [],
	// bootstrap: []
})
export class PagesTestModule {
}
