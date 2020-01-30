import { Router } from 'express';

import DevController from './controllers/DevController';
import SearchController from './controllers/SearchController';
import SessionController from './controllers/SessionController';

<<<<<<< HEAD
// import authMiddleware from './middlewares/auth';
=======
import authMiddleware from './middlewares/auth';
>>>>>>> 0e9e89f93d5b48b53e1f5f6f5143769848aa7138

const routes = Router();

// create a dev
routes.post('/devs', DevController.store);

// login
routes.post('/login', SessionController.store);

// Auth required routes

// routes.use(authMiddleware)

// list devs
routes.get('/devs', DevController.index);
// inative devs
routes.put('/devs/delete/:github_user', DevController.update);
// search devs
routes.get('/search', SearchController.index);

export default routes;
