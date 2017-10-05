import { ContactHttpService } from './../contact-http.service';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Contact } from '../contact';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-contact-show',
  templateUrl: './contact-show.component.html',
  styleUrls: ['./contact-show.component.less']
})
export class ContactShowComponent implements OnInit {

  public contact: Contact;

  constructor(
    protected route: ActivatedRoute,
    protected contactService: ContactHttpService,
  ) { }

  ngOnInit() {
    this.route.params
      .map(params => Number.parseInt(params.id))
      .switchMap(id => this.contactService.get(id))
      .subscribe(contact => {
        this.contact = contact;
      });
  }

}
