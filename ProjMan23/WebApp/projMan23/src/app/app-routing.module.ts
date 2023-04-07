import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './modules/users/user-list/component/user-list.component';
import { AddUsersComponent } from './modules/users/add-users/component/add-users.component';
import { EditUsersComponent } from './modules/users/edit-users/edit-users.component';

const routes: Routes = [
  {
    path:'',
    component: UserListComponent
  },
  {
    path:'users',
    component: UserListComponent
  },
  {
    path:'users/add',
    component: AddUsersComponent
  },
  {
    path:'users/edit/:id',
    component: EditUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
