import { container } from 'tsyringe';

import IHashProvider from './hashProvider/models/IHashProvider';
import BCryptHash from './hashProvider/implementations/BCryptHash';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHash);
