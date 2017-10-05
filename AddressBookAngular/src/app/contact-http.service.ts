import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/do';

import { Contact } from './contact';

@Injectable()
export class ContactHttpService {

  protected events$ = new EventEmitter<string>();

  constructor(
    protected http: HttpClient,
  ) { }

  getList() {
    return this.http.get<Contact[]>(`${environment.apiUrl}/users`)
  }

  get(id: string|number) {
    return this.http.get<Contact>(`${environment.apiUrl}/users/${id}`);
  }

  add(contact: Contact) {
    return this.http.post<Contact>(`${environment.apiUrl}/users`, contact)
            .do(() => {
              this.events$.emit('contact.created');
            });
  }

  getEvents() {
    return this.events$;
  }
}
