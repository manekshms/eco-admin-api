import moment from 'moment';
import { NotFoundError } from 'routing-controllers';
import { Service } from 'typedi';
import { UpdateCustomerReqData } from '../controllers/types/CustomerControllerTypes';
import { Customer } from '../entities/Customer';
import { CreateCustomerData } from './types/CustomerServiceTypes';

@Service()
export class CustomerService {
  public async getAllCustomers(): Promise<Customer[]> {
    const customers = await Customer.find();
    return customers;
  }

  public async createCustomer(
    createCustomerData: CreateCustomerData
  ): Promise<Customer> {
    const time = moment().format('YYY-MM-DD HH:mm:ss');
    const data = {
      ...createCustomerData,
      isActive: true,
      createdAt: time,
      updatedAt: time,
    };
    const customer = await Customer.create(data).save();
    return customer;
  }

  public async updateCustomerById(
    id: string,
    updateCustomerData: UpdateCustomerReqData
  ): Promise<Customer> {
    const time = moment().format('YYY-MM-DD HH:mm:ss');
    const customer = await Customer.findOne(id);
    if (!customer) {
      throw new NotFoundError('Product not found');
    }
    if (updateCustomerData.name) {
      customer.name = updateCustomerData.name;
    }
    if (updateCustomerData.email) {
      customer.email = updateCustomerData.email;
    }
    if (updateCustomerData.password) {
      customer.password = updateCustomerData.password;
    }
    if (typeof updateCustomerData.isActive === 'boolean') {
      customer.isActive = updateCustomerData.isActive;
    }
    customer.updatedAt = time;
    await customer.save();
    return customer;
  }
}
