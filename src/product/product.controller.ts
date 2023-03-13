import { Body, Controller, Delete, Get, HttpCode, HttpException, Param, Post, Put, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HttpExceptionFilter } from 'src/auth/exception/http-exception.filter';
import { AddProductDto } from './dto/add-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductModel } from './product.model';
import { ProductService } from './product.service';


@UseFilters(HttpExceptionFilter)
@UseGuards(AuthGuard("jwt"))
@Controller('product')
export class ProductController {

    constructor(
        private readonly productService: ProductService
    ) { }

    //GET ALL PRODUCTS
    @Get("/get/all")
    async getProducts(): Promise<ProductModel[]> {
        return await this.productService.getProducts()
    }

    //GET PRODUCT BY ID
    @Get("/get/:id")
    async getById(@Param("id") id: string): Promise<ProductModel> {
        return await this.productService.getById(id);
    }

    //ADD NEW PRODUCT 
    @Post("/add")
    async addProduct(@Body() dto: AddProductDto): Promise<ProductModel> {
        return await this.productService.addProduct(dto);
    }

    //UPDATE PRODUCT
    @Put("/update/:id")
    async updateProduct(
        @Param("id") id: string,
        @Body() dto: UpdateProductDto): Promise<ProductModel> {
        return await this.productService.updateProduct(id, dto);
    }

    //DELETE PRODUCT BY ID 
    @Delete("/delete/:id")
    async deleteProduct(@Param("id") id: string): Promise<ProductModel> {
        return await this.productService.deleteProduct(id);
    }

    //FIND PRODUCT BY CATEGORY
    @HttpCode(200)
    @Post("/find")
    async findProduct(@Body() dto: FindProductDto): Promise<ProductModel> {
        return await this.productService.findProduct(dto);
    }
}
