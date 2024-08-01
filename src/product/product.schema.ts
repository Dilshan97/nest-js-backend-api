/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import * as mongoose from 'mongoose';
import { IProductModel } from './interfaces/product.interface';

export const ProductSchema: mongoose.Schema<IProductModel> =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, 'Name is required'],
      },
      description: {
        type: String,
        required: [true, 'Description is required'],
      },
      price: {
        type: Number,
        required: [true, 'Price is required'],
      },
      category: {
        type: String,
        required: [true, 'Category is required'],
      },
    },
    { versionKey: false, timestamps: true },
  );
