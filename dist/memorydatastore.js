"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemoryDataStore {
    constructor() {
        this.store = {};
    }
    get(key) {
        return new Promise((resolve) => {
            resolve(this.store[key]);
        });
    }
    list() {
        return new Promise((resolve) => {
            resolve(this.store);
        });
    }
    set(key, value) {
        return new Promise((resolve) => {
            this.store[key] = value;
            resolve();
        });
    }
    delete(key) {
        return new Promise((resolve) => {
            delete this.store[key];
            resolve();
        });
    }
    clear() {
        this.store = {};
    }
}
exports.MemoryDataStore = MemoryDataStore;
