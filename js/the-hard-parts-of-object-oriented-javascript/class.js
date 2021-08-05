class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
  login() {
    console.log('Login');
  }
}

const user1 = new UserCreator('Amir', 1);

user1.login();
