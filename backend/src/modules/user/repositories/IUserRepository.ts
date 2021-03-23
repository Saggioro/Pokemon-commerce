import User from '../infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUserRepository {
    create(data: ICreateUserDTO): Promise<User>;
    all(): Promise<User[]>;
    save(user: User): Promise<User>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<User | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
}
