/* eslint-disable prettier/prettier */
import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken'
import IUserRepository from '../repositories/IUserRepository';
import AppError from '../../../shared/errors/AppError';
import auth from '../../../config/auth'
import IHashProvider from '../../../shared/container/providers/hashProvider/models/IHashProvider';

interface IRequest {
    email: string;
    password: string;
}
@injectable()
class AuthenticateUserService {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository,
        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) { }

    public async execute({ email, password }: IRequest): Promise<string> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Email/senha inválida');
        }

        const matchPassword = this.hashProvider.compare(password, user.password);

        if (!matchPassword) {
            throw new AppError('Email/senha inválida');

        }

        const token = sign({}, auth.jwt.secret, {
            expiresIn: auth.jwt.expiresIn,
            subject: user.id

        })

        return token;




    }
}

export default AuthenticateUserService;
