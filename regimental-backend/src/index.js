require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./routes/auth');
const electionsRoutes = require('./routes/elections');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/elections', electionsRoutes);

app.get('/', (req, res) => res.send('Regimental backend running'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
