import { Contact } from './contact';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ContactService {

  public contacts: Contact[] = [{
    prenom: 'Jean',
    nom: 'Dupont',
    email: 'jdupont@gmail.com',
    id: 123
  }, {
    prenom: 'Eric',
    nom: 'Martin',
    telephone: '04 56 78 53 25',
    id: 456
  }];

  constructor() { }

  getList(): Observable<Contact[]> {
    return Observable.of(this.contacts)
            .delay(1000);
  }

  get(id: string|number): Observable<Contact> {
    if (typeof id === 'string') {
      id = Number.parseInt(id);
    }

    const contact = this.contacts.find(c => c.id === id);

    // TODO contact === null

    return Observable.of(contact)
      .delay(1000);
  }

}
