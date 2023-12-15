import { Router, Request, Response } from 'express';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const statusGetController = container.get('Apps.pie.controllers.StatusGetController');
  
  router.get('/status', (req: Request, res: Response) => statusGetController.run(req, res));
};