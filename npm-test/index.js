const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
    res.send('Hello Universe');
  });

const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });