import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'test',
		pathMatch: 'full'
	},
	{
		path: 'test',
		loadChildren: './pages/test/test.module#PagesTestModule' ,
	}
];


export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });
