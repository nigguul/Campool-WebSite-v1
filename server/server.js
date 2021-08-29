const http = require('http');
const FS = require("fs");

const hostname = '127.0.0.1';
const port = 80;

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
        res.end(FS.readFileSync(`../Campool WebSite/home/index.html`));
      } else if (req.url.endsWith('n') == true) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        const teste = FS.readFileSync(`../api/829487499944394752/rankingPlayers.json`)
        console.log(teste)
        res.end(teste)
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType[req.url.split(".")[1]]);
        res.end(FS.readFileSync(`../Campool WebSite/home${req.url}`));
      }
  } catch (err) {
      console.log(err)
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
