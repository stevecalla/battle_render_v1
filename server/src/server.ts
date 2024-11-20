import express from 'express';
import path from 'path';  // Import path module
import sequelize from './config/connection.js';
import { routes } from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3001;
const forceDatabaseRefresh = false;

// Serve static files from the 'dist' folder in the client directory
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

// Middleware for parsing JSON bodies
app.use(express.json());

// API routes
app.use(routes);

// Catch-all route to handle client-side routing (React Router)
app.get('*', (_req, res) => {
  // Construct the absolute path to index.html
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Sync database and start the server
sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
