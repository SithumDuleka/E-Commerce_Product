require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/route');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/api', router);

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});