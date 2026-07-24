export default class BaseService {
    constructor(api) {
        this.api = api;
    }

    async getAll() {
        const response = await this.api.getAll();
        return response.data;
    }

    async getById(id) {
        const response = await this.api.getById(id);
        return response.data;
    }

    async create(payload) {
        const response = await this.api.create(payload);
        return response.data;
    }

    async update(id, payload) {
        const response = await this.api.update(id, payload);
        return response.data;
    }

    async delete(id) {
        await this.api.delete(id);
    }
}