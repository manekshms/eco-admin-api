import moment from 'moment';
import { NotFoundError } from 'routing-controllers';
import { Service } from 'typedi';
import { UpdateStoreReqData } from '../controllers/types/StoreControllerTypes';
import { Product } from '../entities/Product';
import { Store } from '../entities/Store';
import { StoreProduct } from '../entities/StoreProduct';
import {
  CreateStoreData,
  CreateStoreProductData,
  productInfo,
} from './types/StoreServiceTypes';

@Service()
export class StoreService {
  public async fetchAllStores(): Promise<Store[]> {
    const stores = await Store.find();
    return stores;
  }

  public async createStore(createStoreData: CreateStoreData): Promise<Store> {
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
    const data = {
      ...createStoreData,
      location: {
        type: 'Point',
        coordinates: createStoreData.location
          .split(' ')
          .map((item) => parseFloat(item)),
      },
      isActive: true,
      createdAt: time,
      updatedAt: time,
    };
    console.log(data);
    const store = await Store.create(data).save();
    return store;
  }

  public async updateStoreById(
    id: string,
    updateStoreData: UpdateStoreReqData
  ): Promise<Store> {
    const time = moment().format('YYYY-MM-DD HH:mm:ss');
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
    // if (updateStoreData.location) {
    //   store.location = updateStoreData.location;
    // }
    if (updateStoreData.phoneNumber) {
      store.phoneNumber = updateStoreData.phoneNumber;
    }
    if (updateStoreData.website) {
      store.website = updateStoreData.website;
    }
    if (typeof updateStoreData.isActive === 'boolean') {
      store.isActive = updateStoreData.isActive;
    }
    store.updatedAt = time;
    await store.save();
    return store;
  }

  public async getStoreById(id: string): Promise<Store> {
    const store = await Store.findOne(id);
    if (!store) {
      throw new NotFoundError('Store not found');
    }
    return store;
  }

  public async getAllStoreProducts(id: string): Promise<StoreProduct[]> {
    const storeProducts = await StoreProduct.find({
      where: {
        storeId: id,
      },
      relations: ['product', 'store'],
    });
    return storeProducts;
  }

  public async createStoreProduct(
    createStoreProductData: CreateStoreProductData
  ): Promise<StoreProduct> {
    const time = moment().format('YYY-MM-DD HH:mm:ss');
    const data = {
      ...createStoreProductData,
      isActive: true,
      createdAt: time,
      updatedAt: time,
    };
    const storeProduct = await StoreProduct.create(data).save();
    return storeProduct;
  }

  public async getAvailableStoreProductToAdd(
    storeId: string
  ): Promise<productInfo[]> {
    const products = await Product.createQueryBuilder('p')
      .leftJoinAndSelect(StoreProduct, 'sp', 'sp.productId = p.productId')
      .where('sp.storeId != :storeId', { storeId })
      .orWhere('sp.storeId IS NULL')
      .getRawMany();
    const results = products.map((item) => {
      return {
        productId: item.p_productId,
        name: item.p_name,
        description: item.p_description,
      };
    });
    return results;
  }
}
