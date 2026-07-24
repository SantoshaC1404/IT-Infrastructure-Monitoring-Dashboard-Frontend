import BaseService from "./BaseService";
import * as userApi from "../api/userApi";

class UserService extends BaseService {
    constructor() {
        super(userApi);
    }
}

export default new UserService();