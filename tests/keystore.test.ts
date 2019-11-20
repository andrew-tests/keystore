import { KeyStore } from '../lib/keystore';
import { DataStore } from '../lib/datastore';
import { writeFileSync } from 'fs';

const store = new KeyStore(new DataStore('test.json'));

describe('KeyStore', () => {
  // Ensure brand new file before each test
  beforeEach(() => {
    writeFileSync('test.json', JSON.stringify([]));
  });

  describe('add', () => {
    it('should add to the key store', async () => {
      await store.add('name', 'andrew');
      const name = await store.get('name');

      expect(name).toBe('andrew');
    });
  });

  describe('list', () => {
    it('should list all key value pairs', async () => {
      await store.add('name', 'andrew');
      await store.add('age', '34');

      const data = await store.list();
      expect(data.name).toBe('andrew');
      expect(data.age).toBe('34');
      expect(data.city).toBe(undefined);
    });
  });

  describe('get', () => {
    it('should get a value for key that exists', async () => {
      await store.add('name', 'andrew');

      const name = await store.get('name');
      expect(name).toBe('andrew');
    });

    it('should return undefined for key that doesnt exist', async () => {
      const name = await store.get('name');
      expect(name).toBe(undefined);
    });
  });

  describe('remove', () => {
    it('should remove a key from the store', async () => {
      await store.add('name', 'andrew');
      const name = await store.get('name');
      expect(name).toBe('andrew');

      await store.remove('name');
      const newName = await store.get('name');
      expect(newName).toBe(undefined);
    });
  });
});
