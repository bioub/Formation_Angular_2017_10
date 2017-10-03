import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p>Prénom : <input on-input="updatePrenom($event)"></p>
    <p>Prénom : <input (input)="updatePrenom($event)"></p>
    
    <p>Prénom : <input bindon-ngModel="prenom"></p>
    <p>Prénom : <input [(ngModel)]="prenom"></p>

    <p>Hello {{prenom}}</p>
  `,
  styles: []
})
export class HelloComponent implements OnInit {

  public prenom: string;

  constructor() { }

  ngOnInit() {
  }

  updatePrenom(event) {
    this.prenom = event.target.value;
  }

}
