const express = require('express');
const router = require('./routes/index');
const middlewares = require('./middlewares/errorMiddleware');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(router);
app.use(middlewares.errorMiddleware);

app.listen(PORT, () => console.log(`All is good my parceiro! @ ${PORT}`));