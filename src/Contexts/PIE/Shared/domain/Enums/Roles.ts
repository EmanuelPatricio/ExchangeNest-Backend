export enum Role {
  Student = 'Student',
  Host = 'Host',
  Organization = 'Organization',
  Administrator = 'Administrator'
}

export const roles: Record<number, Role> = {
  1: Role.Student,
  2: Role.Host,
  3: Role.Organization,
  4: Role.Administrator
};
