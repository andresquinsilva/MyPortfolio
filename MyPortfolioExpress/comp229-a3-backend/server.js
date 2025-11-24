const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const { connectDB } = require('./config/db');
const apiRoutes = require('./routes/api/index.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', apiRoutes);

async function start(){
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log(`✓ Server running at http://localhost:${PORT}`));
  } catch (err) {
    console.error('DB connection failed:', err.message);
    process.exit(1);
  }
}

start();
