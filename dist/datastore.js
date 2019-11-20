"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const { readFile, writeFile } = fs_1.promises;
class DataStore {
    constructor(path = 'store.json') {
        this.path = path;
        this.data = new Map();
    }
    async get(key) {
        await this.readFile();
        return this.data.get(key);
    }
    async list() {
        await this.readFile();
        return Object.fromEntries(this.data);
    }
    async set(key, value) {
        await this.readFile();
        this.data.set(key, value);
        await this.writeFile();
    }
    async delete(key) {
        await this.readFile();
        this.data.delete(key);
        await this.writeFile();
    }
    async readFile() {
        const contents = await readFile(this.path, 'utf8');
        this.data = new Map(JSON.parse(contents));
    }
    async writeFile() {
        await writeFile(this.path, JSON.stringify([...this.data]), 'utf8');
    }
}
exports.DataStore = DataStore;
