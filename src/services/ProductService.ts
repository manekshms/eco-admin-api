import moment from 'moment';
import { NotFoundError } from 'routing-controllers';
import { Service } from 'typedi';
import { UpdateProductReqData } from '../controllers/types/ProductControllerTypes';
import { Product } from '../entities/Product';
import { CreateProductData } from './types/ProductServiceTypes';

@Service()
export class ProductService {
  public async createProduct(
    createProductData: CreateProductData
  ): Promise<Product> {
    const time = moment().format('YYY-MM-DD HH:mm:ss');
    const data = {
      ...createProductData,
      isActive: true,
      createdAt: time,
      updatedAt: time,
    };
    const product = await Product.create(data).save();
    return product;
  }

  public async updateProductById(
    id: string,
    updateProductData: UpdateProductReqData
  ): Promise<Product> {
    const time = moment().format('YYY-MM-DD HH:mm:ss');
    const product = await Product.findOne(id);
    if (!product) {
      throw new NotFoundError('Product not found');
    }
    if (updateProductData.categoryId) {
      product.categoryId = updateProductData.categoryId;
    }
    if (updateProductData.name) {
      product.name = updateProductData.name;
    }
    if (updateProductData.description) {
      product.description = updateProductData.description;
    }
    if (updateProductData.brand) {
      product.brand = updateProductData.brand;
    }
    if (updateProductData.imageName) {
      product.imageName = updateProductData.imageName;
    }
    if (updateProductData.ecoRating) {
      product.ecoRating = updateProductData.ecoRating;
    }
    if (updateProductData.packagingScore) {
      product.packagingScore = updateProductData.packagingScore;
    }
    if (updateProductData.carbonFootprint) {
      product.carbonFootprint = updateProductData.carbonFootprint;
    }
    if (typeof updateProductData.isActive === 'boolean') {
      product.isActive = updateProductData.isActive;
    }
    product.updatedAt = time;
    await product.save();
    return product;
  }
}
