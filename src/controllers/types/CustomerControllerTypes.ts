export interface CreateCustomerReqData {
  name: string;
  email: string;
  password: string;
}

export interface UpdateCustomerReqData {
  name?: string;
  email?: string;
  password?: string;
  isActive?: boolean;
}
