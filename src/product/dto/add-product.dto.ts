import { Type } from "class-transformer"
import { IsArray, IsNumber, IsString, ValidateNested } from "class-validator"
import { ProductCharacteristics } from "../product.model"

export class AddProductDto {
    @IsString()
    image: string
    @IsString()
    title: string
    @IsNumber()
    price: number
    @IsNumber()
    oldPrice: number
    @IsNumber()
    credit: number
    @IsNumber()
    calculatedRating: number
    @IsString()
    description: string
    @IsString()
    advantages: string
    @IsString()
    disAdvantages: string
    @IsArray()
    @IsString({ each: true })
    categories: string[]
    @IsString()
    tags: string
    @IsArray()
    @Type(() => ProductCharacteristics)
    characteristics: ProductCharacteristics[]
}
