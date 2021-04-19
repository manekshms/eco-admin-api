import moment from 'moment';
import { NotFoundError } from 'routing-controllers';
import { Service } from 'typedi';
import { UpdateStoreReqData } from '../controllers/types/StoreControllerTypes';
import { Store } from '../entities/Store';
import { CreateStoreData } from './types/StoreServiceTypes';

@Service()
export class StoreService {
  public async createStore(createStoreData: CreateStoreData): Promise<Store> {
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    const data = {
      ...createStoreData,
      isActive: true,
      createdAt: time,
      updatedAt: time,
    };
    const store = await Store.create(data).save();
    return store;
  }

  public async updateStoreById(
    id: string,
    updateStoreData: UpdateStoreReqData
  ): Promise<Store> {
    const store = await Store.findOne(id);
    if (!store) {
      throw new NotFoundError('Store not found');
    }
    if (updateStoreData.name) {
      store.name = updateStoreData.name;
    }
    if (updateStoreData.address) {
      store.address = updateStoreData.address;
    }
    if (updateStoreData.location) {
      store.location = updateStoreData.location;
    }
    if (updateStoreData.phoneNumber) {
      store.phoneNumber = updateStoreData.phoneNumber;
    }
    if (updateStoreData.website) {
      store.website = updateStoreData.website;
    }
    if (typeof updateStoreData.isActive === 'boolean') {
      store.isActive = updateStoreData.isActive;
    }
    await store.save();
    return store;
  }
}
