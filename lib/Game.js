import Network from './Network';

class Game {
  constructor(test) {
    this.test = test;
  }

  foo() {
    console.log(this.test);
  }
}

const instance = new Game();
export default instance;
