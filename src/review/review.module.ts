import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewController } from './review.controller';
import { ReviewModel, ReviewModelSchema } from './review.model';
import { ReviewService } from './review.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ReviewModel.name, schema: ReviewModelSchema }])
  ],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule { }
