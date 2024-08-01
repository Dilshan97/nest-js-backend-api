import { Inject, Injectable } from '@nestjs/common';
import { IProduct, IProductModel } from './interfaces/product.interface';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL')
    private readonly productModel: Model<IProductModel>,
  ) {}

  private readonly products: IProduct[] = [
    {
      name: 'product 1',
      description: 'description 1',
      price: 100,
      category: 'category 1',
    },
    {
      name: 'product 2',
      description: 'description 2',
      price: 100,
      category: 'category 1',
    },
  ];

  async save(product: IProduct): Promise<IProductModel> {
    return this.productModel.create(product);
  }

  findAll(): IProduct[] {
    return this.products;
  }
}
