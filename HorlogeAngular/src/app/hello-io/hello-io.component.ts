import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hello-io',
  template: `
    <p>Prénom : <input (input)="updatePrenom($event)"></p>
  `,
  styles: []
})
export class HelloIoComponent implements OnInit {

  @Output()
  public onPrenomChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  updatePrenom(event) {
    this.onPrenomChange.emit(event.target.value);
  }

}
