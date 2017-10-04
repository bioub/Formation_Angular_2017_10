import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cm-horloge',
  template: `<div class="horloge">
    {{now|date:format}}
  </div>
  `,
  styles: []
})
export class HorlogeComponent implements OnInit {

  public now = new Date();

    @Input()
    public format = 'HH:mm:ss';

    @Input()
    public delay = 1000;

    constructor() { }

    ngOnInit() {
      setTimeout(this.update.bind(this), this.delay);
    }

    update() {
      this.now = new Date();
      setTimeout(this.update.bind(this), this.delay);
    }

}
