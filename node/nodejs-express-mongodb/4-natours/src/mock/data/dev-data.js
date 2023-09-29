const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tour-model');
const Review = require('../../models/review-model');
const User = require('../../models/user-model');

dotenv.config({ path: '../../../config.env' });

const dbURI = process.env.DB_STRING_LOCAL.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD,
);

mongoose.connect(dbURI).then(() => console.log('DB connected successfully'));

const tours = JSON.parse(fs.readFileSync('tours.json', 'utf-8'));
const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));
const reviews = JSON.parse(fs.readFileSync('reviews.json', 'utf-8'));

const importData = async () => {
  try {
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
    console.log('Data loaded successfully');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deleteOldDocuments = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log('Dropped old documents successfully');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv.includes('--drop')) {
  deleteOldDocuments();
}
if (process.argv.includes('--import')) {
  importData();
}
