const express = require('express');
const router = require('./routes/index');

const app = express();
const PORT = 3001;

app.use(router);

app.listen(PORT, () => console.log(`All is good my parceiro! @ ${PORT}`));