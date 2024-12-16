import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/UserRoute.js';
import mediaRoutes from './routes/MediaRoute.js';
import roleRoutes from './routes/RoleRoute.js';
import { genericError } from './ErrorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/media', mediaRoutes);
app.use('/roles', roleRoutes);

app.use((err, req, res, next) => {
  const error = genericError(err.message);
  res.status(error.status).json({ error: error.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
