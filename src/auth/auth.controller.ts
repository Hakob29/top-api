import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {

    //REGISTER
    @Post("/register")
    async register(@Body() dto: RegisterDto) {

    }

    //LOGIN
    @HttpCode(200)
    @Post("/login")
    async login(@Body() dto: LoginDto) {

    }
}
