const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || '8005';

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
