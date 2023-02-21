import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { ReviewController } from './review.controller';
import { ReviewModelSchema } from './review.model';
import { ReviewService } from './review.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: ReviewModule.name, schema: ReviewModelSchema }])],
  controllers: [ReviewController],
  providers: [ReviewService]
})
export class ReviewModule { }
