import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { UserCreator } from '../../../../Contexts/PIE/Users/application/UserCreator';
import { Controller } from '../Controller';

type UserPostRequest = Request & {
  body: {
    id: number,
    firstName: string,
    lastName: string,
    nic: string,
    email: string,
    password: string,
    birthDate: Date,
    userImage: string | null,
    idRole: number,
    idUserStatus: number,
    idCountry: number,
    createdOn: Date,
    createdBy: number,
    lastModifiedOn: Date | null,
    lastModifiedBy: number | null
  }
}

export class UserPostController implements Controller {
  constructor(private userCreator: UserCreator) {}

  async run(req: UserPostRequest, res: Response) {
    try {
      const { id, firstName, lastName, nic, email, password, birthDate, userImage, idRole, idUserStatus, idCountry, createdOn, createdBy, lastModifiedOn, lastModifiedBy } = req.body;

      await this.userCreator.run({ id, firstName, lastName, nic, email, password, birthDate, image: userImage, idRole, idUserStatus, idCountry, createdOn, createdBy, lastModifiedOn, lastModifiedBy });
      
      res.status(httpStatus.CREATED).send();
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}