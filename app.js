require('dotenv').config();
// const { ENVIRONMENT } = process.env;
const port = process.env || 3001;
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// middleware
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

// db connection
const db = require('./configs/db.config');

// routes import
const phrases = require('./routes/phraseRoutes');

// routes
app.use('/phrases', phrases(db))

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})