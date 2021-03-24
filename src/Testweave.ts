import Arweave from 'arweave/node';
import Testweave from 'testweave-sdk';

export const arweave = Arweave.init({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '80',
    protocol: process.env.PROTOCOL || 'http',
    timeout: 20000,
    logging: false,
});

export const maxBlocks = parseInt(process.env.MAX_BLOCKS || '100000');
export const blockTimer = parseInt(process.env.BLOCK_TIMER || '10000');
export let testweave;
export let counter = 0;

(async () => {
    testweave = await Testweave.init(arweave);

    setInterval(async () => {
        counter++;
        await testweave.mine();
    }, blockTimer);
})();