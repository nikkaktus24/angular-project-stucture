import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';

/* tslint:disable:typedef */
/* tslint:disable:arrow-parens */

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodoComponent
  }
];

export const FeatureRoutingModule = RouterModule.forChild(routes);
