const user1 = {
  name: 'Amir',
  score: 2,
  increment: () => console.log('Increment called'),
};

const user2 = Object.create(null);
user2.name = 'Ali';
user2.score = 23;
user2.increment = console.log('Increment called');

// Duplicate code.
// Create a function to attach these stuff to out object

function userCreator(name, score) {
  const newUser = { name, score };
  newUser.increment = () => newUser.score++;
}

const user3 = userCreator('Amir', 12);
const user4 = userCreator('Ali', 1);
