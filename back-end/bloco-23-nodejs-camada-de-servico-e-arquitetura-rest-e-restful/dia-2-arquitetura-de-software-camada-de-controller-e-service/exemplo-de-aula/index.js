const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => res.send('Hello world!'));
app.listen(PORT, () => console.log(`Te escuto na ${PORT}`));