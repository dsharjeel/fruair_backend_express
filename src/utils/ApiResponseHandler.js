class ApiResponse {
    constructor(status, message = "Success", data) {
        this.status = status,
        this.message = message,
        this.data = data
    }
}

class ApiError extends Error {
    constructor(status, message = "Something went wrong", errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }
}

export { ApiResponse, ApiError };