import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa', 
      password: '123456', 
      database: 'ProductServiceDB',
      entities: [Product],
      synchronize: false, 
      options: {
        encrypt: false,
      },
    }),
    ProductsModule,
  ],
})
export class AppModule {}