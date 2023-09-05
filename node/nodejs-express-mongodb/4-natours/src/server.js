const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: `${__dirname}/../config.env` });

const app = require('./app');

const dbURI = process.env.DB_STRING_LOCAL.replace(
  '<PASSWORD>',
  process.env.DB_PASSWORD,
);
mongoose.connect(dbURI).then(() => console.log('db connected successfully'));

const { PORT } = process.env;

const server = app.listen(PORT, () =>
  console.log(`Server is running on ${PORT}`),
);

process.on('unhandledRejection', (err) => {
  console.log(
    `🔥 UNHANDLED REJECTION: ${err.name}. Shutting down the application...`,
  );
  server.close(() => process.exit(1));
});
