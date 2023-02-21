import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPageController } from './top-page.controller';
import { TopPageModuleSchema } from './top-page.model';
import { TopPageService } from './top-page.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: TopPageModule.name, schema: TopPageModuleSchema }])],
  controllers: [TopPageController],
  providers: [TopPageService]
})
export class TopPageModule { }
