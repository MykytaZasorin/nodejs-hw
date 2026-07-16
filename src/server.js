// Imports
import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import { connectMongoDB } from './db/connectMongoDB.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './middleware/logger.js';
import notesRoutes from './routes/notesRoutes.js';

// Main settings
const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());
app.use(logger);

// Roots
app.use(notesRoutes);

// Check errors
app.use(notFoundHandler);
app.use(errorHandler);

// connect base
await connectMongoDB();

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
