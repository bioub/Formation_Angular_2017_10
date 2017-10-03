/*
function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {

};

const romain = new Contact('Romain');
romain.hello();
*/

class Horloge {
  protected container: Element;

  constructor(container) {
    this.container = container;
  }

  start() {
    this.render();
    setInterval(this.render.bind(this), 1000);
  }

  render() {
    const now = new Date();
    this.container.innerHTML = now.toLocaleTimeString();
  }
}

export { Horloge };
