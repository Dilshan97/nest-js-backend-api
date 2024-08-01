/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import { Mongoose } from 'mongoose';
import { ProductSchema } from './product.schema';

export const productProviders = [
  {
    provide: 'PRODUCT_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Product', ProductSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
