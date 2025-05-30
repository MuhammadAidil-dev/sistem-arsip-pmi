const express = require('express');
const CONFIG = require('./config/env.config');
const { syncDatabase } = require('./config/config');
const app = express();
const PORT = CONFIG.PORT;
const cookieParser = require('cookie-parser');
const cors = require('cors');

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
  res.send('Hello World!');
});

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
