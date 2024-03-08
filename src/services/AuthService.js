import { Api } from "./ApiService";

export class AuthService {
  static async login(data) {
    return await Api.request("POST", "/user/login", data)
  }

  static async signup(data) {
    return await Api.request("POST", "/user/signup", data)
  }

  static async verifySignup(id, token) {
    return await Api.request("GET", `/user/${id}/verify/${token}`)
  }
}