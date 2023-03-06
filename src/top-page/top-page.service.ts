import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { UpdateTopPageDto } from './dto/update-top-page.dto';
import { TopPageModel, TypeTopPageModel } from './top-page.model';

@Injectable()
export class TopPageService {
    constructor(
        @InjectModel(TopPageModel.name) private readonly topPageModel: Model<TypeTopPageModel>
    ) { }


    //CREATE 
    async create(dto: CreateTopPageDto): Promise<TopPageModel> {
        try {
            const result: TopPageModel = await this.topPageModel.create(dto);
            return result;
        } catch (err) {
            console.log(err.message);
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    //GET BY ID
    async get(id: string): Promise<TopPageModel> {
        try {
            const result: TopPageModel = await this.topPageModel.findById(id);
            if (!result) throw new Error("NOT FOUND");
            return result;
        } catch (err) {
            console.log(err.message);
            throw new HttpException(err.message, HttpStatus.NOT_FOUND);
        }
    }

    //DELETE
    async delete(id: string): Promise<TopPageModel> {
        try {
            return await this.topPageModel.findByIdAndDelete(id);
        } catch (err) {
            console.log(err.message);
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }

    //UPDATE
    async update(id: string, dto: UpdateTopPageDto): Promise<TopPageModel> {
        try {
            return await this.topPageModel.findByIdAndUpdate(id, dto);
        } catch (err) {
            console.log(err.message);
            throw new HttpException(err.message, HttpStatus.NOT_FOUND);
        }
    }

    //FIND
    async find(dto: FindTopPageDto): Promise<TopPageModel> {
        try {
            const result: TopPageModel = await this.topPageModel.findOne({ firstCategory: dto.firstCategory });
            if (!result) throw new Error("NOT FOUND");
            return result;
        } catch (err) {
            console.log(err);
            throw new HttpException(err.message, HttpStatus.NOT_FOUND);
        }
    }
}
