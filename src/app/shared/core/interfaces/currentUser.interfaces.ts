export interface CurrentUserInterface {
  email: string;
  username: string;
  name: UserNameInterface;
  address: UserAddressInterface;
  phone: string;
  token: string;
}

export interface UserNameInterface {
  firstname: string;
  lastname: string;
}

export interface UserAddressInterface {
  city: string;
  street: string;
  number: number;
  zipcode: string;
}
