import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductModel, ProductModelSchema } from './product.model';
import { ProductService } from './product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProductModel.name, schema: ProductModelSchema }])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
