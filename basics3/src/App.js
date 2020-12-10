import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

const Person = ({ name, img, age }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
    </article>
  );
};

Person.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
};

class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        name: "amir",
        age: 22,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
      },
      {
        id: 2,
        name: "bob",
        age: 27,
        img: "https://randomuser.me/api/portraits/thumb/men/72.jpg",
      },
    ],
  };

  render() {
    return (
      <section>
        {this.state.people.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            img={person.img}
            age={person.age}
          ></Person>
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
