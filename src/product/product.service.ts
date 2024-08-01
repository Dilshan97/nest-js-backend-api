import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [
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

  save(product: Product) {
    this.products.push(product);
  }

  findAll(): Product[] {
    return this.products;
  }
}
