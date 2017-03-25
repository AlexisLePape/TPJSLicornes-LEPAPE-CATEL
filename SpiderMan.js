/**
 * Created by lepape on 24/03/17.
 */

const BluebirdPromise = require('bluebird');

let instance = null;

class SpiderMan {
  constructor() {
    this.chevauchement = false;
    this.chevauchPoney();
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  chevauchPoney() {
    return new BluebirdPromise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          this.chevauchement = true;
          console.log('SpiderMan a fatigué un poney...');
          resolve();
        } else {
          reject();
        }
      });
    });
  }
}

module.exports = {SpiderMan};
