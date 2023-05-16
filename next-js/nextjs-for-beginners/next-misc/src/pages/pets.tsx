import Image from 'next/image';
import img from '../../public/pet-1.avif';

const petFileNames = [1, 2, 3, 4, 5];
const petFullFileNames = petFileNames.map((fileName) => `pet-${fileName}.avif`);

const Pets = () => {
  return (
    <div>
      <Image src={img} alt="pet" width="280" height="420" placeholder="blur" />
      {petFullFileNames.map((name) => (
        <div key={name}>
          <Image src={`/${name}`} alt="pet" width="360" height="420" />
        </div>
      ))}
    </div>
  );
};

export default Pets;
