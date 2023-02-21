import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

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
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);