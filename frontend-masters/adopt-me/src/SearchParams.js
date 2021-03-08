import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState('dog');
  const [breed, setBreed] = useState('');
  const [breeds, setBreeds] = useState([]);

  return (
    <div className='search-params'>
      <h1>{location}</h1>
      <form action=''>
        <label htmlFor='location'>
          Location
          <input
            type='text'
            value={location}
            id='location'
            placeholder='location'
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor='animal'>
          Animal
          <select
            name=''
            value={animal}
            id='animal'
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option value=''>All</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor='breed'>
          Breed
          <select
            name='breed'
            id='breed'
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option value=''>All</option>
            {breeds.map((breedString) => (
              <option key={breedString} value={breedString}>
                {breedString}
              </option>
            ))}
            s
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
