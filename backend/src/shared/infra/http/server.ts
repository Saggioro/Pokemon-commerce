import 'reflect-metadata';
import 'express-async-errors';
import { config } from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import cors from 'cors';

import AppError from '../../errors/AppError';
import routes from './routes';
import typeOrmconnection from '../typeorm/index';
import { } from '../../container';

async function main() {
    config();
    await typeOrmconnection();
    a();

    const schema = await buildSchema({
        resolvers: [
            `${__dirname}/../../../modules/**/infra/graphql/resolvers/*.ts`,
        ],
    });

    const apolloServer = new ApolloServer({ schema });

    const app = express();

    apolloServer.applyMiddleware({
        app,
    });

    app.use(cors());
    app.use(express.json());

    app.use(routes);

    app.use(
        (err: Error, request: Request, response: Response, _: NextFunction) => {
            if (err instanceof AppError) {
                return response
                    .status(err.status)
                    .json({ status: 'error', message: err.message });
            }

            console.error(err);

            return response.status(500).json({
                status: 'error',
                message: 'Internal server error',
            });
        },
    );

    app.listen(process.env.PORT || 3333, () => {
        console.log('Server started');
    });
}

main();
