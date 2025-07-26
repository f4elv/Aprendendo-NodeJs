const http = require('http');

const server = http.createServer((req, res) =>  {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const nome = url.searchParams.get('nome') || 'visitante';
    const pathname = url.pathname;

    switch (pathname) {
        case "/mensagem":
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end("<h1>Olá, " + nome + "!</h1><p>Bem-vindo ao nosso site!</p>");
            return;
        case "/status":
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: "servidor funcionando", hora: new Date().toISOString() }));
            return;
        case "/sobre":
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end("<h1>Sobre este servidor</h1><p>Criado por rafael usando Node.js puro</p>");
            return;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Página não encontrada. Tente /mensagem, /status ou /sobre.");
            return;
    }

});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});