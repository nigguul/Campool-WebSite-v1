const http = require('http');
const FS = require("fs");

const port = process.env.PORT || 80;

const contentType = {
  'js' : 'text/javascript',
  'css' : 'text/css',
  'html' : 'text/html',
  'svg' : 'image/svg+xml',
  'png' : 'image/png',
  'txt' : 'text/plain'
}

const server = http.createServer((req, res) => {
  try {
    console.log(req.url)
      if (req.url == "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end(FS.readFileSync(`./home/index.html`));
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType[req.url.split(".")[1]]);
        res.end(FS.readFileSync(`./home${req.url}`));
      }
  } catch (err) {
      console.log(err)
  }
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
