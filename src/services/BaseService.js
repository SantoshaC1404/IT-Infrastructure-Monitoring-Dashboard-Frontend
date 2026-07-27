export default class BaseService {
  constructor(api) {
    this.api = api;
  }

  // GET ALL
  async getAll() {
    try {
      const response = await this.api.getAll();
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // GET BY ID
  async getById(id) {
    try {
      const response = await this.api.getById(id);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // CREATE
  async create(payload) {
    try {
      const response = await this.api.create(payload);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // UPDATE
  async update(id, payload) {
    try {
      const response = await this.api.update(id, payload);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // DELETE BY ID
  async delete(id) {
    try {
      await this.api.delete(id);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // ERROR HANDLING
  handleError(error) {
    if (error.response) {
      throw new Error(
        error.response.data?.message ||
          error.response.data?.detail ||
          "Request failed.",
      );
    }

    if (error.request) {
      throw new Error(
        "Unable to connect to the server. Please check your network.",
      );
    }

    throw new Error(error.message || "Unexpected error.");
  }
}
