const express = require('express');
const CONFIG = require('./config/env.config');
const { syncDatabase } = require('./config/config');
const app = express();
const PORT = CONFIG.PORT;
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./middlewares/errors/errorHandler');
const { ValidationRequestError } = require('./middlewares/errors/errorTypes');

// global middleware
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  throw new ValidationRequestError('bad request');
});

// error handler
app.use(errorHandler);

// sinkronisasi database dan jalankan server setelahnya
syncDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log('gagal sinkronisasi database', err);
  });
