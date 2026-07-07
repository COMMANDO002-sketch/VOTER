require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRoutes = require('./routes/auth');
const electionsRoutes = require('./routes/elections');

const app = express();
app.use(helmet());
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'https://voter-44bt.vercel.app,http://localhost:5173,http://localhost:3000').split(',');

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) return callback(null, true);
    return callback(new Error('CORS policy: Origin not allowed'));
  },
  credentials: true,
}));

app.options('*', cors({ origin: allowedOrigins }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/elections', electionsRoutes);

app.get('/', (req, res) => res.send('Regimental backend running'));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
