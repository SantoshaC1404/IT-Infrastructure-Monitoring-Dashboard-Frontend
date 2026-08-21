import { getErrorMessage } from "../utils/apiError";

export default class BaseService {
  constructor(api) {
    this.api = api;
  }

  async getAll(params) {
    try {
      const response = await this.api.getAll(params);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getById(id) {
    try {
      const response = await this.api.getById(id);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async create(payload) {
    try {
      const response = await this.api.create(payload);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async update(id, payload) {
    try {
      const response = await this.api.update(id, payload);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete(id) {
    try {
      const response = await this.api.delete(id);
      return response?.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Common error handler - unwraps an axios/backend error into a
   * plain Error with a human-readable message.
   */
  handleError(error) {
    if (error.code === "ERR_CANCELED" || error.name === "CanceledError") {
      return error;
    }

    return new Error(getErrorMessage(error));
  }
}
