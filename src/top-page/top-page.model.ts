import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export class HhData {
    @Prop({ type: () => Number })
    conut: number;
    @Prop({ type: () => Number })
    juniorSalary: number;
    @Prop({ type: () => Number })
    middleSalary: number;
    @Prop({ type: () => Number })
    seniorSalary: number
}

export class Advantages {
    @Prop({ type: () => String })
    title: string

    @Prop({ type: () => String })
    description: string
}

@Schema()
export class TopPageModel {

    @Prop({ enum: TopLevelCategory })
    firstCategory: TopLevelCategory;

    @Prop({ type: () => String })
    secondCategory: string;

    @Prop({ type: () => String })
    title: string;

    @Prop({ type: () => String })
    category: string;

    @Prop({ type: () => HhData })
    hh?: HhData;

    @Prop({ type: () => [Advantages] })
    advantages: Advantages[];

    @Prop({ type: () => String })
    seoText: string;

    @Prop({ type: () => String })
    tagsTitle: string;

    @Prop({ type: () => [String] })
    tagst: string[];
}

export const TopPageModuleSchema = SchemaFactory.createForClass(TopPageModel)