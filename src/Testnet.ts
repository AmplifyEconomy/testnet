import 'colors';
import Express from 'express';
import BodyParser from 'body-parser';
import { Status } from './routes/Status';
import { Dispense } from './routes/Dispense';

export const Server = Express();
export const PORT = process.env.PORT || '4000';

Server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    return next()
});

Server.use(BodyParser.json());
Server.use(BodyParser.urlencoded({ extended: true }));

Server.get('/', Status);
Server.post('/dispense', Dispense);

Server.listen(PORT, () => {
    console.log(`Arweave Testnet Faucet and Explorer running on`.green.bold, PORT);
});