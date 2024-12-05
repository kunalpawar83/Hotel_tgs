const http = require("http");
const app = require("./app.js");
require("dotenv").config();
const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
