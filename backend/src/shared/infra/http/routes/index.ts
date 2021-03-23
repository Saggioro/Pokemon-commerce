import { Router } from 'express';

import usersRouter from '../../../../modules/user/infra/http/routes/user.routes';
import sessionsUser from '../../../../modules/user/infra/http/routes/sessionsUser.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', sessionsUser);

export default routes;
