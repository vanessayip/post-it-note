const express = require('express');
const app = express();
app.use(express.static(`${__dirname}/client/dist/`));

const PORT = 3000;
app.listen(PORT, 
  console.log(`now listening on port ${PORT}`)
  );