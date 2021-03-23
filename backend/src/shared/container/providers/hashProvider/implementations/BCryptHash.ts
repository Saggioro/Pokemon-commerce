import { hash, compare } from 'bcrypt';
import IHashProvider from '../models/IHashProvider';

class HashProvider implements IHashProvider {
    public async generateHash(password: string): Promise<string> {
        return hash(password, 10);
    }

    public async compare(password: string, hashed: string): Promise<boolean> {
        return compare(password, hashed);
    }
}

export default HashProvider;
