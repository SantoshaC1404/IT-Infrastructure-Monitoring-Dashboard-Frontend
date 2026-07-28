export default class BaseService {
  constructor(api) {
    this.api = api;
  }

  /**
   * Get all resources.
   */
  async getAll() {
    try {
      const response = await this.api.getAll();
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Get resource by id.
   */
  async getById(id) {
    try {
      const response = await this.api.getById(id);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Create resource.
   */
  async create(payload) {
    try {
      const response = await this.api.create(payload);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Update resource.
   */
  async update(id, payload) {
    try {
      const response = await this.api.update(id, payload);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Delete resource.
   */
  async delete(id) {
    try {
      const response = await this.api.delete(id);
      return response?.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Common error handler.
   */
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
