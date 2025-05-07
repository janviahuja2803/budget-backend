const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes); // ✅ This connects your /signup and /login

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5050;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('API is running');
});
