const path = require("path");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({
  noCors: true,
  readOnly: true,
});

server.use(middlewares);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

server.use(router);
server.listen(8080, () => {
  console.log("JSON Server is running");
});
