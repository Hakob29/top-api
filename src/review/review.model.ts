import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose"
import { ProductModel } from "src/product/product.model"

export type TypeReviewModel = ReviewModel & Document

@Schema()
export class ReviewModel {
    @Prop({ type: () => String })
    name: string

    @Prop({ type: () => String })
    title: string

    @Prop({ type: () => String })
    description: string

    @Prop({ type: () => Number })
    rating: number

    @Prop({ type: () => Date })
    createdAt: Date

    @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: "ProductModel" } })
    productId: ProductModel
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);