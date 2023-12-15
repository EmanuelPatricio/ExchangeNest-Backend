import { AggregateRoot } from "../../../Shared/domain/AggregateRoot"
import { BaseEntity } from "../../Shared/domain/BaseEntity"
import { UserId } from "../../Shared/domain/Users/UserId"
import { UserBirthDate } from "./UserBirthDate"
import { UserEmail } from "./UserEmail"
import { UserFirstName } from "./UserFirstName"
import { UserImage } from "./UserImage"
import { UserLastName } from "./UserLastName"
import { UserNIC } from "./UserNIC"
import { UserPassword } from "./UserPassword"

export class User extends AggregateRoot implements BaseEntity {
  readonly id: UserId
  readonly firstName: UserFirstName
  readonly lastName: UserLastName
  readonly nic: UserNIC
  readonly email: UserEmail
  readonly password: UserPassword
  readonly birthDate: UserBirthDate
  readonly userImage: UserImage | null
  readonly idRole: number
  readonly idUserStatus: number
  readonly idCountry: number
  readonly createdOn: Date
  readonly createdBy: UserId
  readonly lastModifiedOn: Date | null
  readonly lastModifiedBy: number | null

  constructor(id: UserId, firstName: UserFirstName, lastName: UserLastName, nic: UserNIC, email: UserEmail, password: UserPassword, birthDate: UserBirthDate, userImage: UserImage | null, idRole: number, idUserStatus: number, idCountry: number, createdOn: Date, createdBy: UserId, lastModifiedOn: Date | null, lastModifiedBy: number | null) {
    super()
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.nic = nic
    this.email = email
    this.password = password
    this.birthDate = birthDate
    this.userImage = userImage
    this.idRole = idRole
    this.idUserStatus = idUserStatus
    this.idCountry = idCountry
    this.createdOn = createdOn
    this.createdBy = createdBy
    this.lastModifiedOn = lastModifiedOn
    this.lastModifiedBy = lastModifiedBy
  }

  static fromPrimitives(plainData: { id: number; firstName: string; lastName: string, nic: string, email: string, password: string, birthDate: Date, image: string | null, role: number, status: number, country: number, createdOn: Date, createdBy: number, lastModifiedOn: Date | null, lastModifiedBy: number | null }): User {
    return new User(
      new UserId(plainData.id),
      new UserFirstName(plainData.firstName),
      new UserLastName(plainData.lastName),
      new UserNIC(plainData.nic),
      new UserEmail(plainData.email),
      new UserPassword(plainData.password),
      new UserBirthDate(plainData.birthDate),
      plainData.image !== null ? new UserImage(plainData.image) : null,
      plainData.role,
      plainData.status,
      plainData.country,
      plainData.createdOn,
      new UserId(plainData.createdBy),
      plainData.lastModifiedOn,
      plainData.lastModifiedBy
    );
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      nic: this.nic.value,
      email: this.email.value,
      password: this.password.value,
      birthDate: this.birthDate.value,
      userImage: this.userImage?.value || null,
      idRole: this.idRole,
      idUserStatus: this.idUserStatus,
      idCountry: this.idCountry,
      createdOn: this.createdOn,
      createdBy: this.createdBy,
      lastModifiedOn: this.lastModifiedOn || null,
      lastModifiedBy: this.lastModifiedBy || null
    };
  }
}