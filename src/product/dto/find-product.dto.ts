import { IsNumber, IsString } from "class-validator"


export class FindProductDto {
    @IsString()
    title: string
    @IsNumber()
    price: number
}