/* eslint-disable prettier/prettier */
import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { hash } from 'bcrypt'

import User from '../../typeorm/entities/User';
import AppError from '../../../../../shared/errors/AppError';
import CreateUserInput from '../inputs/CreateUserInput';

@Resolver(User)
class UserResolver {

    @Mutation(() => User)
    async createUser(
        @Arg('data')
        { password, birth, name, lastName, email }: CreateUserInput,
    ): Promise<User> {
        const findSameEmail = await User.find({ where: { email } });

        if (findSameEmail) {
            throw new AppError('Este email já está sendo utilizado');
        }

        const hashed = await hash(password, 10);
        const user = User.create({
            password: hashed,
            birth,
            name,
            lastName,
            email,
        });

        await User.save(user);

        return user;
    }

    @Query(() => [User])
    async users(): Promise<User[]> {
        return User.find()
    }
}

export default UserResolver;
