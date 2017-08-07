class Login {
  constructor() {
  }

  login({host, username}) {
    host = `ws://${host}`;
    console.log(host, username);
  }
}

const instance = new Login();
export default instance;
