import { Controller, Delete, Get, HttpCode, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @Post()
  @HttpCode(201)
  create(): string {
    return 'create product';
  }
  @Get(':id')
  findOneById(): string {
    return 'find product by id';
  }
  @Put(':id')
  update(): string {
    return 'update product by id';
  }
  @Delete(':id')
  remove(): string {
    return 'delete product by id';
  }
}
