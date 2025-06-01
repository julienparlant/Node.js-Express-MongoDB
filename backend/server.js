/*
require = import en Node
require permet d'omettre l'extension .js
*/

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Voilà la réponse du serveur !");
});

server.listen(process.env.PORT || 3000);