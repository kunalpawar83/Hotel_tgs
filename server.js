const http = require("http");
const connectDb = require("./utils/connectDB");
const app = require("./app.js");
require("dotenv").config();
const port = process.env.PORT || 5000;

const server = http.createServer(app);

connectDb().then(() => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
