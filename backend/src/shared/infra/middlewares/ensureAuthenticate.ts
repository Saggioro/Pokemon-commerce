import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '../../errors/AppError';
import auth from '../../../config/auth';

interface ITokenPayload {
    iat: number;
    exp: number;
    sub: string;
}

function ensureAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('Você precisa estar logado!', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, auth.jwt.secret);

        const { sub } = decoded as ITokenPayload;

        request.user = {
            id: sub,
        };

        return next();
    } catch (err) {
        throw new AppError('JWT token inválido');
    }
}

export default ensureAuthenticate;
