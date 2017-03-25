/**
 * Created by lepape on 22/03/17.
 */

const BluebirdPromise = require('bluebird');

let instance = null;

class Deadpool {
  constructor() {
    this.energieDP = 50;
    this.mangePepito = false;
    this.transformPoney();
    this.deadPoolenergie();
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  transformPoney() {
    return new BluebirdPromise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          this.mangePepito = true;
          resolve();
          console.log('La transformation en licorne à réussi!');
        } else {
          this.mangePepito = false;
          console.log('Déception , Pepito reste un simple poney');
          reject();
        }
      }
        );
    }
    );
  }
  deadPoolenergie() {
    if (this.energieDP < 65 && this.mangePepito === true) {
      this.energieDP += 35;
      this.mangePepito = false;
    }
    if (this.energieDP > 0 && this.energieDP < 20) {
      console.log('SITUATION CRITIQUE , espérons qu une licorne vienne à la rescousse de Deadpool!');
    }
    if (this.energieDP < 5) {
      console.log('DeadPoll est mort ! Fin du game');
    }
  }
}

module.exports = {Deadpool};
