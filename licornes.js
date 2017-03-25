const eventnuit = require('events');
const {Deadpool} = require('./Deadpool');
const {SpiderMan} = require('./SpiderMan');

class MyEvent extends eventnuit {}

const myEvent = new MyEvent();

this.jour = true;
this.heure = 0;

myEvent.on('event', () => {
  this.heure += 1;
  if (this.heure % 24 > 6 && this.heure % 24 < 21) {
    this.jour = true;
    console.log('C est le JOUR');
  } else {
    this.jour = false;
    console.log('C est la NUIT');
  }
});

class Poney {
  constructor(nom) {
    this.nom = nom;
    this.energy = 0;
    this.isUnicorn = false;
    this.deadpool = new Deadpool();
    this.spiderMan = new SpiderMan();
    this.myEvent = new MyEvent();
    this.initInterval();
  }
  initInterval() {
    this.intervalEnergy = setInterval(() => {
      myEvent.emit('event');
        // Console.log(this.myEvent.jour); incapacité a récuperer this.jour dans myEvent...
      if (this.jour = true) {
        this.energy += 15;
        this.deadpool.deadPoolenergie();
        this.deadpool.energieDP -= 5;
        console.log('L énergie de DeadPoll est de : ' + this.deadpool.energieDP);
        this.Spider();
        if (this.energy > 50) {
          if (Math.random() > (1.2 - (this.energy / 100))) {
            setTimeout(() => this.transformToUnicorn());
          }
        }
        if (this.deadpool.energieDP < 0) {
          clearInterval(this.intervalEnergy);
        }
      }
    }, 1100);
  }

  transformToUnicorn() {
    this.deadpool.transformPoney()
      .then(() => this.isUnicorn = true)
      .catch(() => this.isUnicorn = false)
      .finally(() => this.energy = 0);
  }

  Spider() {
    this.spiderMan.chevauchPoney()
      .then(() => this.energy -= 5)
      .catch(() => this.energy)
      .finally(() => this.spiderMan.chevauchement = false);
  }
}

module.exports = {Poney};

const p1 = new Poney('Pepito');
console.log(p1);

