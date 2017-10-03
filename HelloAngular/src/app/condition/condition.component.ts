import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  template: `
    <p>
      <input type="checkbox" [(ngModel)]="showSpan">
      <span [hidden]="!showSpan">condition Works!</span>
      <span *ngIf="showSpan">condition Works!</span>
    </p>

    <p>
      Ajouter un prénom :
      <input [(ngModel)]="newPrenom">
      <button (click)="ajouterPrenom()">+</button>
    </p>

    <p *ngFor="let prenom of prenoms">
      <input type="checkbox" [checked]="showSpan">
      {{prenom}}
    </p>
  `,
  styles: []
})
export class ConditionComponent implements OnInit {

  public newPrenom = '';
  public prenoms = ['Jean'];
  public showSpan = true;

  constructor() { }

  ngOnInit() {
  }

  ajouterPrenom() {
    this.prenoms.push(this.newPrenom);
    // Cloner un objet (1er niveau)
    // this.prenoms.push(Object.assign({}, this.newPrenom));
    
    // Cloner un tableau (1er niveau)
    // this.prenoms.push(tabACopier.slice());
    // this.prenoms.push([...tabACopier]);

    // Pour un clone récursif regarder lodash
    // _.cloneDeep()
  }

}
