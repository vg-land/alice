import createSocket from "./utils/createSocket";
import express from "express";
import staticFile from "./middleware/staticFile";

const app = express();
const server = createSocket(app);

const port = process.env.PORT || 4100;

server.listen(port, () => {
  console.log("Server listening at port %d", port);
});

app.use(staticFile);
