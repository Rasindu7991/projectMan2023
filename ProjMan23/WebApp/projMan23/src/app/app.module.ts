import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './modules/users/user-list/component/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUsersComponent } from './modules/users/add-users/component/add-users.component';
import { FormsModule } from '@angular/forms';
import { EditUsersComponent } from './modules/users/edit-users/edit-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUsersComponent,
    EditUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
