const Observable = require('rxjs').Observable;

function setIntervalObservable() {
  return Observable.interval(1000)
          .filter(val => val % 2 === 0)
          .map(val => val + 1 + 's')
}

setIntervalObservable()
  .subscribe((val) => console.log(val));

// Avantages Observable sur Promise :
// - s'applique à des événements qui se répètent
// - peuvent être annulés (ex requete serveur qui ne m'intéresse plus)
// - se déclenche à la souscription
// - peut être transformé avant la souscription