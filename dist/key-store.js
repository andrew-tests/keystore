"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyStore {
    constructor(store) {
        this.store = store;
    }
    async add(key, value) {
        return this.store.set(key, value);
    }
    async list() {
        return this.store.list();
    }
    async get(key) {
        return this.store.get(key);
    }
    async remove(key) {
        return this.store.delete(key);
    }
}
exports.KeyStore = KeyStore;
