// import { UserId } from "../../Shared/domain/Users/UserId"
// import { UserBirthDate } from "../domain/UserBirthDate"
// import { UserEmail } from "../domain/UserEmail"
// import { UserFirstName } from "../domain/UserFirstName"
// import { UserImage } from "../domain/UserImage"
// import { UserLastName } from "../domain/UserLastName"
// import { UserNIC } from "../domain/UserNIC"

export interface CreateUserRequest {
  id: number
  firstName: string
  lastName: string
  nic: string
  email: string
  password: string
  birthDate: Date
  image: string | null
  idRole: number
  idUserStatus: number
  idCountry: number
  createdOn: Date
  createdBy: number
  lastModifiedOn: Date | null
  lastModifiedBy: number | null
}