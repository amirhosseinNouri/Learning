const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tour-model');

dotenv.config({ path: '../../../config.env' });

const dbURI = process.env.DB_STRING_LOCAL.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD,
);

mongoose.connect(dbURI).then(() => console.log('DB connected successfully'));

const tours = JSON.parse(fs.readFileSync('tours-simple.json', 'utf-8'));

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data loaded successfully');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deleteOldDocuments = async () => {
  try {
    await Tour.deleteMany();
    console.log('Dropped old documents successfully');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--drop') {
  deleteOldDocuments();
}
console.log(process.argv);
