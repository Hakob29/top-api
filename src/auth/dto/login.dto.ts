import { IsEmail, IsString, MaxLength, Min, MinLength } from "class-validator";

export class LoginDto {

    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;

}   