import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
	HostPageComponent,
	HomePageComponent,
} from './pages';

const ROUTES = [{
	path: '',
	component: HostPageComponent,
	children: [{
		path: '',
		component: HomePageComponent
	},
	// {
	// 	path: 'terms',
	// 	component: TermsPageComponent
	// },
	// {
	// 	path: 'privacy',
	// 	component: PrivacyPageComponent
	// }
	]
}, {
	path: '**',
	redirectTo: ''
},
];


@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	],
	exports: [
		RouterModule
	]
})

export class HomeRoutingModule { }
