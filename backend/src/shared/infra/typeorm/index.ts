import { createConnection, Connection } from 'typeorm';

const connect = async (): Promise<Connection> => {
    return createConnection();
};
export default connect;
