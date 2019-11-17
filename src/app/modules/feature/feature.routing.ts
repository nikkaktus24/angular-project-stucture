import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodoComponent
  }
];

export const FeatureRoutingModule = RouterModule.forRoot(routes);
