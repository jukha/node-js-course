const http = require("http");
const server = http.createServer((req, res) => {
  // req => incoming request
  // res => what we are sending back
  if (req.url === "/") {
    res.end("welcome to homepage");
  }
  if (req.url === "/about") {
    res.end("Here is about section");
  }
  res.end(`<h1>OOPS! </h1`);
});

server.listen(5000); // our server will listen at this port
