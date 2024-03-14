const baseURI = "http://localhost:8080/api";

export class Api {
  static getHeaders() {
    return {
      "Content-Type": "application/json",
    };
  }

  static async request(method, endpoint, payload) {

    const reqOptions = {
      method: method,
      headers: this.getHeaders(),
      body: payload ? JSON.stringify(payload) : null,
    };
    try {
      const resJson = await fetch(baseURI + endpoint, reqOptions);
      const res = await resJson.json();
      return res;
    } catch (error) {
      return error.message;
    }
  }

  static async getUserById(userId) {
    const endpoint = `/user/${userId}`;
    try {
      const res = await this.request("GET", endpoint);
      return res;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw new Error("Failed to fetch user data");
    }
  }
}
