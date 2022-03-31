import { PrismaClient, Prisma } from '@prisma/client'
import express from 'express'

import router from './routes';

const prisma = new PrismaClient();
const app = express();

// Setup the express app to parse JSON and use the router
app.use(express.json())

// Define the router with the /api/v1 prefix
app.use('/api/v1', router);

export default app;