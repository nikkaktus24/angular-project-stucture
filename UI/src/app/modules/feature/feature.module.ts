import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from 'src/app/modules/feature/feature.routing';
import { TodoComponent } from 'src/app/modules/feature/components/todo/todo.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const declarations = [
  TodoComponent,
];

@NgModule({
  declarations: declarations,
    imports: [
        CommonModule,
        FeatureRoutingModule,
        HttpClientModule,
        SharedModule,
    ],
  exports: declarations
})
export class FeatureModule { }
