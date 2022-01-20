import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
