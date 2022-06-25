import { Server } from "./shared/server/server";

function main() {
  const newServer = Server.create(3000);
  newServer.start();
}

main();