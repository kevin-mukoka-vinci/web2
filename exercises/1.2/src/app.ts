import express from 'express';
import requestCounterMiddleware from './middlewares/requestCounterMiddleware';
import moviesRouter from './routes/movies';

const app = express();

// Appliquer le middleware de comptage des requêtes
app.use(requestCounterMiddleware);

// Routes pour les films
app.use('/movies', moviesRouter);

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
