import { ContactHttpService } from './contact-http.service';
import { ContactService } from './contact.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
} from '@angular/material';

import { CMHorlogeModule } from 'cmcomponents';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactShowComponent } from './contact-show/contact-show.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ContactListComponent,
    ContactAddComponent,
    ContactShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CMHorlogeModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatListModule,
  ],
  providers: [
    ContactService,
    ContactHttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
