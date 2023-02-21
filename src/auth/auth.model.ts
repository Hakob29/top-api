import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

export type TypeAuthModel = AuthModel & Document;

@Schema()
export class AuthModel {

    @Prop({ type: () => String })
    name: string;

    @Prop({ type: () => String, unique: true })
    email: string

    @Prop({ type: () => String })
    password: string

    @Prop({ type: () => Date })
    createdAt: Date

    @Prop({ type: () => Date })
    updatedAt: Date
}
export const AuthModelSchema = SchemaFactory.createForClass(AuthModel);
