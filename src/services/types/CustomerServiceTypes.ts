export interface CreateCustomerData {
  name: string;
  email: string;
  password: string;
}

export interface UpdateCustomerData {
  name?: string;
  email?: string;
  password?: string;
  isActive?: boolean;
}
