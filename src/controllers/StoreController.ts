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
import { Store } from '../entities/Store';
import { StoreProduct } from '../entities/StoreProduct';
import {
  createStoreValidators,
  updateStoreByIdValidators,
} from '../middlewares/validators/StoreValidators';
import { StoreService } from '../services/StoreService';
import { productInfo } from '../services/types/StoreServiceTypes';
import {
  CreateStoreReqData,
  UpdateStoreReqData,
} from './types/StoreControllerTypes';
import { CreateStoreProductReqData } from './types/StoreProductControllerType';

@Service()
@JsonController('/store')
export class StoreController {
  public constructor(private storeService: StoreService) {}

  @Get('/')
  public async fetchAllStores(): Promise<Store[]> {
    const stores = this.storeService.fetchAllStores();
    return stores;
  }

  @Get('/:id')
  public async getStoreById(@Param('id') storeId: string): Promise<Store> {
    const store = this.storeService.getStoreById(storeId);
    return store;
  }

  @UseBefore(...createStoreValidators)
  @Post('/')
  public async createStore(
    @Body() createStoreReqData: CreateStoreReqData
  ): Promise<Store> {
    const store = await this.storeService.createStore(createStoreReqData);
    return store;
  }

  @UseBefore(...updateStoreByIdValidators)
  @Patch('/:id')
  public async updateStore(
    @Param('id') id: string,
    @Body() updateStoreReqData: UpdateStoreReqData
  ): Promise<Store> {
    const store = await this.storeService.updateStoreById(
      id,
      updateStoreReqData
    );

    return store;
  }

  @Get('/:id/product')
  public async getAllStoreProducts(
    @Param('id') id: string
  ): Promise<StoreProduct[]> {
    const storeProducts = await this.storeService.getAllStoreProducts(id);
    return storeProducts;
  }

  @Post('/:id/product')
  public async createStoreProduct(
    @Body() createStoreProductReqData: CreateStoreProductReqData
  ): Promise<StoreProduct> {
    const storeProduct = await this.storeService.createStoreProduct(
      createStoreProductReqData
    );
    return storeProduct;
  }

  @Get('/:id/available-products-to-add')
  public async availableStoreProductsToAdd(
    @Param('id') id: string
  ): Promise<productInfo[]> {
    const data = await this.storeService.getAvailableStoreProductToAdd(id);
    return data;
  }
}
