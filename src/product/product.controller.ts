import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { AddPrductDto } from './dto/add-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {

    @Get("/get/all")
    async getProducts() {

    }

    @Get("/get/:id")
    async getById(@Param("id") id: string) {

    }

    @Post("/add")
    async addProduct(@Body() dto: AddPrductDto) {

    }

    @Put("/update/:id")
    async updateProduct(
        @Param("id") id: string,
        @Body() dto: UpdateProductDto) {
    }
    @Delete("/delete/:id")
    async deleteProduct(@Param() id: string) {

    }

    @HttpCode(200)
    @Post("/find")
    async findProduct(@Body() dto: FindProductDto) {

    }
}
