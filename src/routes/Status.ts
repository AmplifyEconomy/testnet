import { maxBlocks, counter } from '../Testweave';

export async function Status(req, res, next) {
    return res.json({
        status: 'OK',
        maxBlocks,
        block: counter,
    });
}