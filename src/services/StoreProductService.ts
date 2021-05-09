import moment from 'moment';
import { NotFoundError } from 'routing-controllers';
import { Service } from 'typedi';
import { UpdateStoreProductReqData } from '../controllers/types/StoreProductControllerType';
import { StoreProduct } from '../entities/StoreProduct';
import { CreateStoreProductData } from './types/StoreProductServiceTypes';

@Service()
export class StoreProductService {
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

  public async updateStoreProductById(
    id: string,
    updateStoreProductData: UpdateStoreProductReqData
  ): Promise<StoreProduct> {
    const time = moment().format('YYY-MM-DD HH:mm:ss');
    const storeProduct = await StoreProduct.findOne(id);
    if (!storeProduct) {
      throw new NotFoundError('Product not found');
    }
    if (updateStoreProductData.storeId) {
      storeProduct.storeId = updateStoreProductData.storeId;
    }
    if (updateStoreProductData.ProductId) {
      storeProduct.productId = updateStoreProductData.ProductId;
    }
    if (updateStoreProductData.distanceFromOrigin) {
      storeProduct.distanceFromOrigin =
        updateStoreProductData.distanceFromOrigin;
    }
    storeProduct.updatedAt = time;
    await storeProduct.save();
    return storeProduct;
  }
}
