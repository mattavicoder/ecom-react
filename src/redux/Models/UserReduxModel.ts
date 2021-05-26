export interface UserReduxModel {
  UserName: string;
  Email?: string;
}

export interface UserAuthModel extends UserReduxModel {
  Password: string;
  ConfirmPassword: string;
}
