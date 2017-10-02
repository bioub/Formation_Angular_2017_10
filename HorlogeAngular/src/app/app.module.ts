import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorlogeComponent } from './horloge/horloge.component';
import { HelloComponent } from './hello/hello.component';
import { ConditionComponent } from './condition/condition.component';
import { HorlogeIoComponent } from './horloge-io/horloge-io.component';
import { HelloIoComponent } from './hello-io/hello-io.component';

@NgModule({
  declarations: [
    AppComponent,
    HorlogeComponent,
    HelloComponent,
    ConditionComponent,
    HorlogeIoComponent,
    HelloIoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
