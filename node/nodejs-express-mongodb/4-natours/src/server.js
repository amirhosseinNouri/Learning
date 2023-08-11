const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../config.env` });

const app = require('./app');

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
