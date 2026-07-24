import BaseService from "./BaseService";
import * as alertApi from "../api/alertApi";

class AlertService extends BaseService {
    constructor() {
        super(alertApi);
    }
}

export default new AlertService();