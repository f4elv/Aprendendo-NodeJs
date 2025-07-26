const chalk = require('chalk');
const http = require('http');

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const nome = url.searchParams.get('nome') || 'visitante';
  const tipo = url.searchParams.get('tipo');

  switch (tipo) {
    case 'saudacao':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Olá, ${nome}! Bem-vindo ao nosso site!`);
      return;
    case 'despedida':
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Até logo, ${nome}! Volte sempre!`);
      return;
    default:
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Desculpe, não entendi sua mensagem.');
      return;
  }
});

server.listen(3000, () => {
  console.log(chalk.red('Servidor rodando em http://localhost:3000'));
});