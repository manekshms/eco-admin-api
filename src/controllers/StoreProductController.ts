import {
  Body,
  JsonController,
  Param,
  Patch,
  Post,
  UseBefore,
} from 'routing-controllers';
import { Service } from 'typedi';
import { StoreProduct } from '../entities/StoreProduct';
import {
  createStoreProductValidators,
  updateStoreProductByIdValidators,
} from '../middlewares/validators/StoreProductValidators';
import { StoreProductService } from '../services/StoreProductService';
import {
  CreateStoreProductReqData,
  UpdateStoreProductReqData,
} from './types/StoreProductControllerType';

@Service()
@JsonController('/store')
export class StoreController {
  public constructor(private storeProductService: StoreProductService) {}

  @UseBefore(...createStoreProductValidators)
  @Post('/')
  public async createStoreProduct(
    @Body() createStoreProductReqData: CreateStoreProductReqData
  ): Promise<StoreProduct> {
    const storeProduct = await this.storeProductService.createStoreProduct(
      createStoreProductReqData
    );
    return storeProduct;
  }

  @UseBefore(...updateStoreProductByIdValidators)
  @Patch('/:id')
  public async updateStore(
    @Param('id') id: string,
    @Body() updateStoreProductReqData: UpdateStoreProductReqData
  ): Promise<StoreProduct> {
    const store = await this.storeProductService.updateStoreProductById(
      id,
      updateStoreProductReqData
    );

    return store;
  }
}
