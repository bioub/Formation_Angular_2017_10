import { Horloge } from './horloge/horloge';

const divElt = document.querySelector('.horloge');
const clock = new Horloge(divElt);
clock.start();
