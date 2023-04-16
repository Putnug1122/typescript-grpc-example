import { ServiceError, credentials } from "@grpc/grpc-js";
import { AuthServiceClient, LoginRequest, LoginResponse } from "./protos/auth";

const loginRequest: LoginRequest = {
  username: "admin",
  password: "admin",
};

const client = new AuthServiceClient(
  "localhost:8080",
  credentials.createInsecure()
);
client.login(
  loginRequest,
  (err: ServiceError | null, response: LoginResponse) => {
    console.log(JSON.stringify(response));
  }
);
