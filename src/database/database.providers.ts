/* eslint-disable prettier/prettier */
/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 */
import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb://localhost/test'),
    },
];