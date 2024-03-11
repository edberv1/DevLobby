import { Api } from "./ApiService";

export class AuthService {
  static async login(data) {
    return await Api.request("POST", "/user/login", data);
  }

  // admin endpoint
  static async adminLogin(data) {
    return await Api.request("POST", "/user/admin/login", data);
  }

  static async signup(data) {
    return await Api.request("POST", "/user/signup", data);
  }

  static async verifySignup(id, token) {
    return await Api.request("GET", `/user/${id}/verify/${token}`);
  }
  //get user by ID
  static async getUserById(userId) {
    return await Api.getUserById(userId);
  }
}
