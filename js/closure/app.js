// function ask(question) {
//   setTimeout(function waitASec() {
//     console.log(question);
//   }, 1000);
// }

// ask('What is closure???')

function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}

const myQuestion = ask('what is closure??');

myQuestion();
