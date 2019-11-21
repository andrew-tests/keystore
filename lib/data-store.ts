export interface StoreData {
  [key: string]: string;
}

export interface DataStore {
  get(key: string): Promise<string | undefined>;
  list(): Promise<StoreData>;
  set(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
}
