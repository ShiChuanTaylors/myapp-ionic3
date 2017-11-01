import { NgModule } from '@angular/core';
import { ReadMoreComponent } from './read-more/read-more';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [ReadMoreComponent],
	imports: [
		CommonModule,
	],
	exports: [ReadMoreComponent]
})
export class ComponentsModule {}
