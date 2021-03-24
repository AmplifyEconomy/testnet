import { testweave } from '../Testweave';

export async function Dispense(req, res, next) {
    const address = req.body.address;
    
    return res.json({
        status: 'OK',
        transaction: await testweave.drop(address, '1000000000000'),
    });
}