class ApiResponse {
  constructor(statusCode, message = "success", data = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400; // true if < 400 (success), false if error
  }
}

export default ApiResponse;
