const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Bonjour');
});

app.listen(PORT, () => console.log(`All is good my parceiro! @ ${PORT}`));