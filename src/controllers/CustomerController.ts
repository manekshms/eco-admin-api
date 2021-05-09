import {
  Body,
  Get,
  JsonController,
  Param,
  Patch,
  Post,
  UseBefore,
} from 'routing-controllers';
import { Service } from 'typedi';
import { Customer } from '../entities/Customer';
import {
  createCustomerValidators,
  updateCustomerByIdValidators,
} from '../middlewares/validators/CustomerValidators';

import { CustomerService } from '../services/CustomerService';
import {
  CreateCustomerReqData,
  UpdateCustomerReqData,
} from './types/CustomerControllerTypes';

@Service()
@JsonController('/customer')
export class CustomerController {
  public constructor(private customerService: CustomerService) {}

  @Get('/')
  public async getAllCustomers(): Promise<Customer[]> {
    const customers = await this.customerService.getAllCustomers();
    return customers;
  }

  @UseBefore(...createCustomerValidators)
  @Post('/')
  public async createCustomer(
    @Body() createCustomerReqData: CreateCustomerReqData
  ): Promise<Customer> {
    const product = await this.customerService.createCustomer(
      createCustomerReqData
    );
    return product;
  }

  @UseBefore(...updateCustomerByIdValidators)
  @Patch('/:id')
  public async updateCustomerID(
    @Param('id') id: string,
    @Body() updateProductReqData: UpdateCustomerReqData
  ): Promise<Customer> {
    const product = await this.customerService.updateCustomerById(
      id,
      updateProductReqData
    );
    return product;
  }
}
