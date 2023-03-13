import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddProductDto } from './dto/add-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductModel, TypeProductModel } from './product.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(ProductModel.name) private readonly productModel: Model<TypeProductModel>
    ) { }

    //GET ALL PRODUCTS
    async getProducts(): Promise<ProductModel[]> {
        try {
            return await this.productModel.find();
        } catch (err) {
            console.log(err.message);
            throw new HttpException(err.message, HttpStatus.UNAUTHORIZED);
        }
    }

    //GET PRODUCT BY ID
    async getById(id: string): Promise<ProductModel> {
        try {
            return await this.productModel.findById(id);
        } catch (err) {
            console.log(err.message);
            throw new HttpException(err.message, HttpStatus.NOT_FOUND);
        }
    }

    //ADD NEW PRODUCT
    async addProduct(dto: AddProductDto): Promise<ProductModel> {
        try {
            const newProduct: ProductModel = await this.productModel.create(dto);
            return newProduct;
        } catch (err) {
            console.log(err.message);
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    //UPDATE PRODUCT
    async updateProduct(id: string, dto: UpdateProductDto): Promise<ProductModel> {
        try {
            const product: ProductModel = await this.productModel.findById(id);
            if (!product) throw new Error("Product not found!!!");
            return await this.productModel.findByIdAndUpdate(id, dto);

        } catch (err) {
            console.log(err.message);
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    //DELETE PRODUCT BY ID 
    async deleteProduct(id: string): Promise<ProductModel> {
        try {
            return await this.productModel.findByIdAndDelete(id);
        } catch (err) {
            console.log(err.message);
            throw new HttpException(err.message, HttpStatus.NOT_FOUND);
        }
    }

    async findProduct(dto: FindProductDto): Promise<ProductModel> {
        try {
            const product: ProductModel = await this.productModel.findOne({
                title: dto.title,
                price: dto.price
            });
            return product;
        } catch (err) {
            console.log(err.message);

        }
    }
}
