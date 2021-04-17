import {
  Body,
  JsonController,
  Param,
  Patch,
  Post,
  UseBefore,
} from 'routing-controllers';
import { Service } from 'typedi';
import { Store } from '../entities/Store';
import {
  createStoreValidators,
  updateStoreByIdValidators,
} from '../middlewares/validators/StoreValidators';
import { StoreService } from '../services/StoreService';
import {
  CreateStoreReqData,
  UpdateStoreReqData,
} from './types/StoreControllerTypes';

@Service()
@JsonController('/store')
export class StoreController {
  public constructor(private storeService: StoreService) {}

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
}
