import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

const Person = ({ person }) => {
  const { name, img, age, info } = person;
  return (
    <article>
      <img src={img} alt="person" />
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
      <h3>Info : {info}</h3>
    </article>
  );
};

Person.propTypes = {
  person : PropTypes.shape({
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
  })

};

person,defaultProps = {
  
}

// Person.defaultProps = {
//   img: "https://randomuser.me/api/portraits/men/45.jpg",
//   name: "james doe",
//   age: 34,
//   info: "default info about the person",
// };

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        name: "amir",
        age: 22,
        img: "https://randomuser.me/api/portraits/men/75.jpg",
      },
      {
        id: 2,
        name: "bob",
        age: 27,
        img: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        id: 3,
        name: "peter",
        age: 27,
        img: "https://randomuser.me/api/portraits/men/82.jpg",
        info: "some info about peter",
      },
    ],
  };

  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person key={person.id} person={person}></Person>
        ))}
      </section>
    );
  }
}

export default class App extends Component {
  render() {
    return <PersonList></PersonList>;
  }
}
