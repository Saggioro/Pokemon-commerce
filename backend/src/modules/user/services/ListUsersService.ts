/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class ListUsersService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
    ) { }

    public async execute(): Promise<User[]> {
        const users = await this.userRepository.all();

        return users;
    }
}

export default ListUsersService;
