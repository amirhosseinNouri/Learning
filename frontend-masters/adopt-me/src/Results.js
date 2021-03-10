import React from 'react';
import Pet from './Pet';

export default function Results({ pets }) {
  return (
    <div className='search'>
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              animal={pet.type}
              key={pet.id}
              name={pet.name}
              breed={pet.breeds.primary}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              id={pet.id}
            ></Pet>
          );
        })
      )}
    </div>
  );
}
