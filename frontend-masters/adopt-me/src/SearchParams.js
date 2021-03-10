import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown, setAnimal] = useDropdown(
    'Animal',
    'dog',
    ANIMALS,
  );
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed('');

    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  } , [animal , setBreed , setBreeds]);

  return (
    <div className='search-params'>
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
        <AnimalDropdown></AnimalDropdown>
        <BreedDropdown></BreedDropdown>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
