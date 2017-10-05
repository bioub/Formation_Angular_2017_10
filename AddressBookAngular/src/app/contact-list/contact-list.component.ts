import { ContactHttpService } from './../contact-http.service';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.less']
})
export class ContactListComponent implements OnInit {

  public contacts;

  constructor(
    protected contactService: ContactHttpService,
  ) {}

  ngOnInit() {
    this.refreshList();
    this.contactService.getEvents()
      .subscribe((event) => {
        switch (event) {
          case 'contact.created':
          case 'contact.modified':
          case 'contact.deleted':
            this.refreshList();
        }
      });
  }

  refreshList() {
    this.contactService.getList()
      .subscribe(contacts => {
        this.contacts = contacts;
      });
  }

}
