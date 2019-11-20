import { FileMapper, StoreData } from './file-mapper';

export class KeyStore {
  public constructor(private store: FileMapper) {}

  public async add(key: string, value: string): Promise<void> {
    return this.store.set(key, value);
  }

  public async list(): Promise<StoreData> {
    return this.store.list();
  }

  public async get(key: string): Promise<string | undefined> {
    return this.store.get(key);
  }

  public async remove(key: string): Promise<void> {
    return this.store.delete(key);
  }
}
