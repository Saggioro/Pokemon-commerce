import { Router } from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();

const userRouter = Router();

userRouter.post('/', userController.create);
userRouter.get('/', userController.index);

export default userRouter;
