import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const app = express();
const PORT = 3300;

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
