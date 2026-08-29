import BaseService from "../../../services/BaseService";
import * as alertApi from "../../../api/alertApi";

class AlertService extends BaseService {
  constructor() {
    super(alertApi);
  }

  async getOpen() {
    try {
      const response = await alertApi.getOpen();
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async acknowledge(id) {
    try {
      const response = await alertApi.acknowledge(id);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async resolve(id) {
    try {
      const response = await alertApi.resolve(id);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

export default new AlertService();
