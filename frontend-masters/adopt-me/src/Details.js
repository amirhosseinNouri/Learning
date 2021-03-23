import React, { Component } from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundry from './ErrorBoundry';
import ThemeContext from './ThemeContext';
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { media, animal, breed, location, description, name } = this.state;

    return (
      <div className='details'>
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>

          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundry(props) {
  return (
    <ErrorBoundry>
      <Details {...props}></Details>
    </ErrorBoundry>
  );
}
