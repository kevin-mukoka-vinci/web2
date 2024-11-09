import { Request, Response, NextFunction } from 'express';

interface RequestCounter {
  [method: string]: { [path: string]: number };
}

// Stocker le nombre de requêtes
const requestCounters: RequestCounter = {};

// Middleware pour compter les requêtes par méthode et chemin
const requestCounterMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const method = req.method;
  const path = req.path;

  // Initialiser les compteurs si ce n'est pas déjà fait
  if (!requestCounters[method]) {
    requestCounters[method] = {};
  }

  if (!requestCounters[method][path]) {
    requestCounters[method][path] = 0;
  }

  // Incrémenter le compteur de la méthode et du chemin
  requestCounters[method][path]++;

  // Afficher les statistiques dans la console
  console.log('Request counter:');
  Object.keys(requestCounters).forEach((method) => {
    Object.keys(requestCounters[method]).forEach((path) => {
      console.log(`- ${method} ${path}: ${requestCounters[method][path]}`);
    });
  });

  next();
};

export default requestCounterMiddleware;
