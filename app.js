const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`Hey there world!`);
});

app.get('/about', (req, res) => {
 res.send(`I like to play games`);
});

app.listen(4000, () => console.log('Listening on 4000'));