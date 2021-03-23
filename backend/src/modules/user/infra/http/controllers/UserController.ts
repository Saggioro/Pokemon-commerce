import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateApointmentService from '../../../services/CreateUserService';
import ListUsersService from '../../../services/ListUsersService';

class UserController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, lastName, birth, email, password } = request.body;

        const createApointmentService = container.resolve(
            CreateApointmentService,
        );

        const user = await createApointmentService.execute({
            name,
            lastName,
            birth,
            email,
            password,
        });

        return response.status(201).json(user);
    }

    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const listUsersService = container.resolve(ListUsersService);

        const users = await listUsersService.execute();

        return response.json(users);
    }
}

export default UserController;
