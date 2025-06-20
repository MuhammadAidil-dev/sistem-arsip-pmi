const express = require('express');
const CONFIG = require('./config/env.config');
const { syncDatabase } = require('./config/config');
const app = express();
const PORT = CONFIG.PORT;
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./middlewares/errors/errorHandler');
const apiRoutes = require('./routes');
const allowedOrigins = ['http://localhost:5173'];

// global middleware
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());

// global route
app.use('/api', apiRoutes);

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
