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
    protected contactService: ContactService,
  ) {}

  ngOnInit() {
    this.contactService.getList()
      .subscribe(contacts => {
        this.contacts = contacts;
      });
  }

}
