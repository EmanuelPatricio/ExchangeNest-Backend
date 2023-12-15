import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from '../swagger_output.json';

export const register = (router: Router) => {
  router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
};
