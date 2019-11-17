import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatureRoutingModule} from './feature.routing';
import { TodoComponent } from './components/todo/todo.component';

const declarations = [
  TodoComponent,
];

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  exports: declarations
})
export class FeatureModule { }
