import { Router } from 'express';

const router = Router();

const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', duration: 148, budget: 160, imageUrl: 'https://example.com/inception.jpg' },
  { id: 2, title: 'The Matrix', director: 'Lana Wachowski', duration: 136, budget: 63, imageUrl: 'https://example.com/matrix.jpg' },
  { id: 3, title: 'Interstellar', director: 'Christopher Nolan', duration: 169, budget: 165, imageUrl: 'https://example.com/interstellar.jpg' }
];

// @ts-ignore
router.get('/', (req, res) => {
    res.json(movies);
  });
  
  
export default router;
