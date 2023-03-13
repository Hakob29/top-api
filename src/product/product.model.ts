import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { IsString } from "class-validator";

export class ProductCharacteristics {
    @IsString()
    name: string
    @IsString()
    value: string
}

export type TypeProductModel = ProductModel & Document;

@Schema()
export class ProductModel {

    @Prop({ type: () => String })
    image: string

    @Prop({ type: () => String })
    title: string

    @Prop({ type: () => Number })
    price: number

    @Prop({ type: () => Number })
    oldPrice: number

    @Prop({ type: () => Number })
    credit: number

    @Prop({ type: () => Number })
    calculatedRating: number

    @Prop({ type: () => String })
    description: string

    @Prop({ type: () => String })
    advantages: string

    @Prop({ type: () => String })
    disAdvantages: string

    @Prop({ type: () => [String] })
    categories: string[]

    @Prop({ type: () => [String] })
    tags: string[]


    @Prop({ type: () => [ProductCharacteristics] })
    characteristics: ProductCharacteristics[]
}

export const ProductModelSchema = SchemaFactory.createForClass(ProductModel);