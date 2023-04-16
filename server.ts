import {
  Server,
  ServerCredentials,
  ServerUnaryCall,
  sendUnaryData,
} from "@grpc/grpc-js";
import {
  AuthServiceService,
  LoginCode,
  LoginRequest,
  LoginResponse,
} from "./protos/auth";

const server = new Server();

const users = [{ id: 0, username: "admin", password: "admin" }];

const login = (
  call: ServerUnaryCall<LoginRequest, LoginResponse>,
  callback: sendUnaryData<LoginResponse>
) => {
  const user = users.find(
    (user) =>
      user.username === call.request.username &&
      user.password === call.request.password
  );
  if (user) {
    const result: LoginResponse = {
      loginCode: LoginCode.SUCCESS,
      token: "RandomSecretToken",
    };
    callback(null, result);
  } else {
    const result: LoginResponse = {
      loginCode: LoginCode.FAIL,
    };
    callback(null, result);
  }
};

server.addService(AuthServiceService, {
  login: login,
});

server.bindAsync("localhost:8080", ServerCredentials.createInsecure(), () => {
  server.start();
});
