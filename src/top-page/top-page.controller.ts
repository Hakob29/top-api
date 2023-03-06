import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { UpdateTopPageDto } from './dto/update-top-page.dto';
import { TopPageModel } from './top-page.model';
import { TopPageService } from './top-page.service';

@Controller('top-page')
export class TopPageController {

    constructor(
        private readonly topPageService: TopPageService
    ) { }

    //CREATE 
    @Post("/create")
    async create(@Body() dto: CreateTopPageDto): Promise<TopPageModel> {
        return await this.topPageService.create(dto);
    }

    //GET BY ID
    @Get("/:id")
    async get(@Param("id") id: string): Promise<TopPageModel> {
        return await this.topPageService.get(id);
    }

    //DELETE 
    @Delete("/:id")
    async delete(@Param("id") id: string): Promise<TopPageModel> {
        return await this.topPageService.delete(id);
    }

    //UPDATE
    @Put("/update/:id")
    async update(
        @Body() dto: UpdateTopPageDto,
        @Param("id") id: string
    ): Promise<TopPageModel> {
        return await this.topPageService.update(id, dto);
    }

    //FIND
    @HttpCode(200)
    @Post("find")
    async find(@Body() dto: FindTopPageDto): Promise<TopPageModel> {
        return await this.topPageService.find(dto);
    }
}
