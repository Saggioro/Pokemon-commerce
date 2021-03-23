import { InputType, Field } from 'type-graphql';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';

@InputType()
export default class CreateUserInput implements ICreateUserDTO {
    @Field()
    birth: Date;

    @Field()
    email: string;

    @Field()
    lastName: string;

    @Field()
    name: string;

    @Field()
    password: string;
}
