import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
    </p>
    <hr>
    <app-horloge></app-horloge>
    <hr>
    <app-hello></app-hello>
    <hr>
    <app-condition></app-condition>
    <hr>
    <app-horloge-io format="HH:mm:ss" [delay]="1000"></app-horloge-io>
    <hr>
    <app-hello-io (onPrenomChange)="updatePrenom($event)"></app-hello-io>
    <p>
      Prénom reçu de app-hello-io : {{prenom}}
    </p>
  `,
  styles: []
})
export class AppComponent {
  public prenom = '';

  updatePrenom(prenom) {
    this.prenom = prenom;
  }
}
