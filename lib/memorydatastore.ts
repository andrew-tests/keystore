import { DataStore, StoreData } from './datastore';

export class MemoryDataStore implements DataStore {
  private store: StoreData = {};

  get(key: string): Promise<string | undefined> {
    return new Promise((resolve) => {
      resolve(this.store[key]);
    });
  }

  list(): Promise<StoreData> {
    return new Promise((resolve) => {
      resolve(this.store);
    });
  }

  set(key: string, value: string): Promise<void> {
    return new Promise((resolve) => {
      this.store[key] = value;
      resolve();
    });
  }

  delete(key: string): Promise<void> {
    return new Promise((resolve) => {
      delete this.store[key];
      resolve();
    });
  }

  clear() {
    this.store = {};
  }
}
