# SIMPLE GRPC SERVER & CLIENT USING TYPESCRIPT & NODEJS

1. install dependencies by running `npm install`
2. add or edit `.proto` files in `protos` foler, and compile using this command <br>

   ```sh
   protoc --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=. ./protos/file_name.proto --ts_proto_opt=outputServices=grpc-js,env=node,esModuleInterop=true
   ```

3. run server and client with command

   ```sh
   npx ts-node server.ts
   ```

   ```sh
   npx ts-node client.ts
   ```
