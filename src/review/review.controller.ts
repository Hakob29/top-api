import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {

    constructor(
        private readonly reviewService: ReviewService
    ) { }

    @Post("/create")
    async create(@Body() dto: CreateReviewDto): Promise<ReviewModel> {
        return await this.reviewService.create(dto);
    }

    @Delete("/delete/:id")
    async delete(@Param("id") id: string): Promise<ReviewModel> {
        return await this.reviewService.delete(id);
    }

    @Get("/:productId")
    async getByProduct(@Param("productId") productId: string): Promise<ReviewModel> {
        return await this.reviewService.findByProductId(productId)
    }
}
