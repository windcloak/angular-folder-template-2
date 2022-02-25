import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { COMPONENTS } from './components';

import './icons';

@NgModule({
	declarations: [
		COMPONENTS
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		HttpClientModule,
		// FontAwesomeModule,
	],
	exports: [
		CommonModule,
		FormsModule,
		RouterModule,
		HttpClientModule,
		// FontAwesomeModule,

		COMPONENTS,
	],
	entryComponents: [
		COMPONENTS
	],
})
export class SharedModule {
}
