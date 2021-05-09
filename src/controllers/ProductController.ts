import { Response } from 'express';
import {
  Body,
  Get,
  JsonController,
  Param,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseBefore,
} from 'routing-controllers';
import { Service } from 'typedi';
import { Product } from '../entities/Product';
import { FirebaseConfigService } from '../libs/FirebaseConfigService';
import { uploadProductImage } from '../middlewares/uploads/productImageUpload';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
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
  public constructor(
    private productService: ProductService,
    private firebaseConfigService: FirebaseConfigService
  ) {}

  @Get('/')
  public async fetchAllProducts(): Promise<Product[]> {
    const products = await this.productService.getAllProducts();
    return products;
  }

  @Post('/')
  public async createProduct(
    @Body() createProductReqData: CreateProductReqData,
    @UploadedFile('imageName', { options: uploadProductImage }) file: any
  ): Promise<Product> {
    const admin = this.firebaseConfigService.getFirebaseAdmin();
    const token = uuidv4();
    const metadata = {
      contentType: file.mimetype,
      firebaseStorageDownloadToken: token,
    };
    // create a filename
    const filename = `${token}.${
      file.mimetype === 'image/png' ? 'png' : 'jpeg'
    }`;
    await admin
      .storage()
      .bucket()
      .file(filename)
      .save(file.buffer, { metadata, gzip: true });
    const data = {
      ...createProductReqData,
      imageName: filename,
    };
    const product = await this.productService.createProduct(data);
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

  @Get('/image/:name')
  public async getProductImage(
    @Param('name') name: string,
    @Res() response: Response
  ): Promise<Response> {
    const downloadLink = this.firebaseConfigService.generateDownloadLinkFromFileName(
      name
    );
    const resp = await axios.get(downloadLink, { responseType: 'arraybuffer' });
    response.set({ 'Content-Type': resp.headers['content-type'] });
    return response.send(resp.data);
  }
}
