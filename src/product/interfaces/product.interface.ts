/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import { Document } from 'mongoose';
export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface IProductModel extends IProduct, Document {}
