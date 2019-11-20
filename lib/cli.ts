import { existsSync, writeFileSync } from 'fs';
import { KeyStore } from './keystore';
import { FileDataStore } from './filedatastore';

const FILE_PATH = 'store.json';

if (!existsSync(FILE_PATH)) {
  writeFileSync(FILE_PATH, JSON.stringify([]));
}

const [operation, key, value] = process.argv.slice(2);
const store = new KeyStore(new FileDataStore(FILE_PATH));

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
