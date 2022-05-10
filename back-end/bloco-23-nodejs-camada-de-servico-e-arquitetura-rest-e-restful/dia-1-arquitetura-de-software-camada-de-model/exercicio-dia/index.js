const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`TMJ na porta ${PORT}`);
});