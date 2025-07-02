require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/route');
const errorHandler = require('./middlewares/errorMiddleware');
const cors= require("cors");

app.use(express.json());
app.use(cors());
app.use('/api', router);

// Global error handler
app.use(errorHandler);


app.get('/test', (req, res) => res.send('Hello world'));

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

