const express = require('express');
const connectDb = require('./config/db');

const app = express();

// Connect to Database
connectDb();

app.use(express.json({ extended: false}));

// Define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));