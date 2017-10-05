import { ContactHttpService } from './../contact-http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.less']
})
export class ContactAddComponent implements OnInit {

  public contact = new Contact();

  constructor(
    protected contactService: ContactHttpService,
    protected router: Router,
  ) { }

  ngOnInit() {
  }

  addContact() {
    this.contactService.add(this.contact)
      .subscribe(contactFromServer => {
        this.router.navigate(['contacts', contactFromServer.id]);
        // this.contact = new Contact();
      });
  }

}
