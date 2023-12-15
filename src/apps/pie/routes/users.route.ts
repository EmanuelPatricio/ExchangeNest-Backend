import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { body } from 'express-validator';
import { validateReqSchema } from '.';

export const register = (router: Router) => {
  const reqSchemaCreateNewUser = [
    body('id').exists().isNumeric(),
    body('firstName').exists().isString(),
    body('lastName').exists().isString(),
    body('nic').exists().isString(),
    body('email').exists().isEmail(),
    body('password').exists(),
    body('birthDate').exists().isISO8601().toDate(),
    body('userImage'),
    body('idRole').exists().isNumeric(),
    body('idUserStatus').exists().isNumeric(),
    body('idCountry').exists().isNumeric(),
    body('createdOn').exists().isISO8601().toDate(),
    body('createdBy'),
    body('lastModifiedOn'),
    body('lastModifiedBy')
  ];
  const reqSchemaLoginUser = [body('email').exists().isEmail(), body('password').exists()];

  const userLoginController = container.get('Apps.pie.controllers.users.UserLoginController');
  const userPostController = container.get('Apps.pie.controllers.users.UserPostController');

  router.get('/api/auth/login', reqSchemaLoginUser, validateReqSchema, (req: Request, res: Response) => {
    userLoginController.run(req, res);
  });

  router.post('/api/users', reqSchemaCreateNewUser, validateReqSchema, (req: Request, res: Response) => {
    userPostController.run(req, res);
  });
};
