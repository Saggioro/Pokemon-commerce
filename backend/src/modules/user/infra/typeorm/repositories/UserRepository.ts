import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '../../../dtos/ICreateUserDTO';

import IUserRepository from '../../../repositories/IUserRepository';
import User from '../entities/User';

class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;

    private static instance: IUserRepository;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public static async getInstace() {
        if (!UserRepository.instance) {
            this.instance = new UserRepository();
        }
        return this.instance;
    }

    public async create(data: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create(data);

        await this.ormRepository.save(user);

        return user;
    }

    public async save(data: User): Promise<User> {
        const user = await this.ormRepository.save(data);

        return user;
    }

    public async delete(id: string): Promise<void> {
        await this.ormRepository.delete(id);
    }

    public async all(): Promise<User[]> {
        const users = await this.ormRepository.find();

        return users;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({ where: { email } });

        return user || undefined;
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({ where: { id } });

        return user || undefined;
    }
}

export default UserRepository;
