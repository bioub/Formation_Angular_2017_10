import { ContactShowComponent } from './contact-show/contact-show.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Route[] = [{
  path: 'contacts',
  component: ContactListComponent,
  children: [{
    path: 'add',
    component: ContactAddComponent,
  }, {
    path: ':id',
    component: ContactShowComponent
  }]
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true, // IE9
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
