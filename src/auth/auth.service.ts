import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthModel, TypeAuthModel } from './auth.model';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(AuthModel.name) private readonly AuthModel: Model<TypeAuthModel>
    ) { }


    //REGISTER
    async register(dto: RegisterDto) {
        const newUser = await this.AuthModel.create({
            name: dto.name,
            email: dto.email,
            password: await bcrypt.hash(dto.password, 10)
        });
        newUser.save();
        return newUser;
    }
}
