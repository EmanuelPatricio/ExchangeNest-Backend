export interface LoginUserResponse {
  id: number;
  firstName: string;
  lastName: string;
  nic: string;
  email: string;
  password: string;
  birthDate: Date;
  role: string;
  status: string;
  country: string;
  token: string;
}
