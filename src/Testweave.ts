import Arweave from 'arweave/node';
import Testweave from 'testweave-sdk';

export const arweave = Arweave.init({
    host: 'localhost',
    port: 1984,
    protocol: 'http',
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