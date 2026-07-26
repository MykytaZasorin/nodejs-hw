// Imports
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { errors } from 'celebrate';
import cookieParser from 'cookie-parser';

import { connectMongoDB } from './db/connectMongoDB.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './middleware/logger.js';
import notesRoutes from './routes/notesRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Main settings
const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(logger);

// Roots
app.use(notesRoutes);
app.use(authRoutes);
app.use(userRoutes);

// Check errors
app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

// connect base
await connectMongoDB();

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
