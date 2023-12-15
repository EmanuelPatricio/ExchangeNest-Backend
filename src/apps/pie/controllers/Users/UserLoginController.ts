import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import { UserLogin } from '../../../../../src/Contexts/PIE/Users/application/UserLogin';

type UserLoginRequest = Request & {
  body: {
    email: string;
    password: string;
  };
};

export class UserLoginController implements Controller {
  constructor(private userLogin: UserLogin) {}

  async run(req: UserLoginRequest, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await this.userLogin.run({ email, password });

      res.status(httpStatus.OK).send(JSON.stringify(user));
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
