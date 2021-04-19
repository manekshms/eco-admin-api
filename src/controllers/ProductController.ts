import {
  Body,
  JsonController,
  Param,
  Patch,
  Post,
  UseBefore,
} from 'routing-controllers';
import { Service } from 'typedi';
import { Product } from '../entities/Product';
import {
  createProductValidators,
  updateProductByIdValidators,
} from '../middlewares/validators/ProductValidators';

import { ProductService } from '../services/ProductService';
import {
  CreateProductReqData,
  UpdateProductReqData,
} from './types/ProductControllerTypes';

@Service()
@JsonController('/product')
export class ProductController {
  public constructor(private productService: ProductService) {}

  @UseBefore(...createProductValidators)
  @Post('/')
  public async createProduct(
    @Body() createProductReqData: CreateProductReqData
  ): Promise<Product> {
    const product = await this.productService.createProduct(
      createProductReqData
    );
    return product;
  }

  @UseBefore(...updateProductByIdValidators)
  @Patch('/:id')
  public async updateProductByID(
    @Param('id') id: string,
    @Body() updateProductReqData: UpdateProductReqData
  ): Promise<Product> {
    const product = await this.productService.updateProductById(
      id,
      updateProductReqData
    );
    return product;
  }
}
