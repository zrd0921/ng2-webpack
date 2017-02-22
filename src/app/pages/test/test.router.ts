import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesTestComponent } from './test.component';
import { MainComponent } from './main/main.component';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
	{
		path: '',
		component: PagesTestComponent,
		children: [
			{
				path: '',
				redirectTo: 'main',
				pathMatch: 'full'
			},
			{
				path: 'main',
				component: MainComponent
			},
			{
				path: 'second',
				component: SecondComponent
			},
		]
	}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
