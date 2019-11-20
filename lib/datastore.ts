import { promises } from 'fs';
const { readFile, writeFile } = promises;

export interface StoreData {
  [key: string]: string;
}

export class DataStore {
  private data: Map<string, string> = new Map();

  public constructor(private path: string = 'store.json') {}

  public async get(key: string): Promise<string | undefined> {
    await this.readFile();

    return this.data.get(key);
  }

  public async list(): Promise<StoreData> {
    await this.readFile();

    return Object.fromEntries(this.data);
  }

  public async set(key: string, value: string): Promise<void> {
    await this.readFile();
    this.data.set(key, value);
    await this.writeFile();
  }

  public async delete(key: string): Promise<void> {
    await this.readFile();
    this.data.delete(key);
    await this.writeFile();
  }

  private async readFile(): Promise<void> {
    const contents = await readFile(this.path, 'utf8');
    this.data = new Map(JSON.parse(contents));
  }

  private async writeFile(): Promise<void> {
    await writeFile(this.path, JSON.stringify([...this.data]), 'utf8');
  }
}
