const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../config.env` });

const app = require('./app');

const dbURI = process.env.DB_STRING_LOCAL.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD,
);
mongoose.connect(dbURI).then(() => console.log('db connected successfully'));

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'A tour must have a name',
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: 'A tour must have a price',
  },
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'The Park Camper',
  price: 497,
});

testTour
  .save()
  .then((document) => console.log(document))
  .catch((err) => console.log(err));

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
