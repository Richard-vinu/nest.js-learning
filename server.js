const express = require('express');
const connectDB = require('./src/db-config/db');
const routes = require('./src/routes/route');

const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Express server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
