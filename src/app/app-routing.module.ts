import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
