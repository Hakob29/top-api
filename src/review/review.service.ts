import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel, TypeReviewModel } from './review.model';

@Injectable()
export class ReviewService {

    constructor(
        @InjectModel(ReviewModel.name) private readonly reviewModel: Model<TypeReviewModel>


    ) { }

    //CREATE REVIEW 
    async create(dto: CreateReviewDto): Promise<ReviewModel> {
        try {
            const review = await this.reviewModel.create(dto);
            return review;
        } catch (err) {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }

    }

    //FIND BY PRODUCT ID
    async findByProductId(productId: string): Promise<ReviewModel> {
        try {
            const review = await this.reviewModel.find({ productId: productId });
            if (!review[0]) throw new Error("Product with this ID not found!!!");
            return review[0];

        } catch (err) {
            throw new HttpException(err.message, HttpStatus.NOT_FOUND);
        }
    }


    //DELETE REVIEW
    async delete(id: string): Promise<ReviewModel | null> {
        try {
            return await this.reviewModel.findByIdAndDelete(id);

        } catch (err) {
            throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
        }
    }
}
