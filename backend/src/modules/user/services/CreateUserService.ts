/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe';
import { } from 'date-fns';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';
import AppError from '../../../shared/errors/AppError';
import IHashProvider from '../../../shared/container/providers/hashProvider/models/IHashProvider';

@injectable()
class CreateApointmentService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) { }

    public async execute({
        email,
        password,
        birth,
        lastName,
        name,
    }: ICreateUserDTO): Promise<User> {
        const findSameEmail = await this.userRepository.findByEmail(email);

        if (findSameEmail) {
            throw new AppError('Este email já está sendo utilizado');
        }

        const hashed = await this.hashProvider.generateHash(password);

        const user = await this.userRepository.create({
            email,
            password: hashed,
            birth,
            lastName,
            name,
        });

        return user;
    }
}

export default CreateApointmentService;
