import {
  Body,
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
@JsonController('/product')
export class ProductController {
  public constructor(private customerService: CustomerService) {}

  @UseBefore(...createCustomerValidators)
  @Post('/')
  public async createProduct(
    @Body() createCustomerReqData: CreateCustomerReqData
  ): Promise<Customer> {
    const product = await this.customerService.createCustomer(
      createCustomerReqData
    );
    return product;
  }

  @UseBefore(...updateCustomerByIdValidators)
  @Patch('/:id')
  public async updateProductByID(
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
