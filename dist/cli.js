"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const keystore_1 = require("./keystore");
const datastore_1 = require("./datastore");
const FILE_PATH = 'store.json';
if (!fs_1.existsSync(FILE_PATH)) {
    fs_1.writeFileSync(FILE_PATH, JSON.stringify([]));
}
const [operation, key, value] = process.argv.slice(2);
const store = new keystore_1.KeyStore(new datastore_1.DataStore(FILE_PATH));
(async () => {
    switch (operation) {
        case 'add':
            await store.add(key, value);
            break;
        case 'list':
            const list = await store.list();
            console.table(list);
            break;
        case 'get':
            const returnValue = await store.get(key);
            console.table({ [key]: returnValue });
            break;
        case 'remove':
            await store.remove(key);
            break;
        case 'help':
            console.log('Store API\n');
            console.log('Available Operations:');
            console.log('---------------------');
            console.log('store add mykey myvalue');
            console.log('store list');
            console.log('store get mykey');
            console.log('store remove mykey\n');
            break;
        default:
            console.log(`Operation ${operation} does not exist.`);
    }
})();
