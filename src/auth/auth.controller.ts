import { Body, Controller, HttpCode, Post, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly AuthService: AuthService
    ) { }

    //REGISTER
    @Post("/register")
    async register(@Body() dto: RegisterDto) {
        return await this.AuthService.register(dto);
    }

    //LOGIN
    @HttpCode(200)
    @Post("/login")
    async login(@Body() dto: LoginDto) {
        return await this.AuthService.login(dto);
    }
}
