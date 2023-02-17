import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { UpdateTopPageDto } from './dto/update-top-page.dto';

@Controller('top-page')
export class TopPageController {

    @Post("/create")
    async create(@Body() dto: CreateTopPageDto) {

    }

    @Get("/:id")
    async get(@Param("id") id: string) {

    }


    @Delete("/:id")
    async delete(@Param("id") id: string) {

    }

    @Put("/update")
    async update(@Body() dto: UpdateTopPageDto) {

    }

    @HttpCode(200)
    @Post("find")
    async find(@Body() dto: FindTopPageDto) {

    }
}
