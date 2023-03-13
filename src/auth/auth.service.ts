import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthModel, TypeAuthModel } from './auth.model';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from "bcrypt"
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(AuthModel.name)
        private readonly AuthModel: Model<TypeAuthModel>,
        private readonly JwtService: JwtService
    ) { }


    //REGISTER
    async register(dto: RegisterDto) {
        try {
            const newUser = await this.AuthModel.create({
                name: dto.name,
                email: dto.email,
                password: await bcrypt.hash(dto.password, 10)
            });
            return newUser;
        } catch (err) {
            console.log(err.message);
            throw new HttpException("Whoops, looks like something went wrong", HttpStatus.BAD_REQUEST);

        }

    }

    //LOGIN
    async login(dto: LoginDto) {
        try {
            const user = await this.AuthModel.findOne({ email: dto.email });
            if (!user) throw new Error("USER NOT FOUND!");
            if (!(await bcrypt.compare(dto.password, user.password))) throw new Error("WRONG PASSWORD!");
            return await this.validate(user);
        } catch (err) {
            console.log(err.message);
            throw new HttpException(err.message, HttpStatus.NOT_FOUND);

        }
    }

    //VALIDATE
    async validate(user: AuthModel) {
        const payload = { username: user.name, sub: user.email };
        return {
            access_token: this.JwtService.sign(payload),
        };
    }
}
