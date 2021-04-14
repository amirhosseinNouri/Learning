function WorkshopModule(teacher) {
  var publicAPI = { ask };
  return publicAPI;

  function ask(question) {
    console.log(teacher, question);
  }
}

const workshop = WorkshopModule('Kyle');
workshop.ask('This is my question');
