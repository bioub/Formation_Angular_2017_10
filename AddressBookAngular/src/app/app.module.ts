import { ContactService } from './contact.service';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';import { BrowserModule } from '@angular/platform-browser';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactShowComponent } from './contact-show/contact-show.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactAddComponent,
    NotFoundComponent,
    ContactShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
  ],
  providers: [
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
