'use strict';

const express = require('express');

const PORT = process.env.PORT || 3000;
const server = express();

server.use(express.static(__dirname));

server.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log('Listening on http://localhost:' + PORT);
});