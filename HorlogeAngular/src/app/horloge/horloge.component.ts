import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horloge',
  template: `
    <div>
      <p bind-innerHTML="now"></p>
      <p [innerHTML]="now"></p>
      {{now|date:'HH:mm:ss'}}
      <input bind-value="now">
      <input [value]="now">
    </div>
  `,
  styles: []
})
export class HorlogeComponent implements OnInit {

  public now = new Date();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

}
