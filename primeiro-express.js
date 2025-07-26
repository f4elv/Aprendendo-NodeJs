import express from 'express';

//inicializando o Express
const app = express();

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); //chama o próximo middleware ou rota
});

//rota para usuarios
app.get('/usuarios/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send(`Olá, ${nome}! Bem-vindo ao nosso site!`);
});

//rota para exibir status com JSON
app.get('/status', (req, res) => {
    res.json({
        status: "servidor funcionando",
        servidor: "Express.js",
        dia: new Date().toISOString()
    })
})

//inicializando o servidor na porta 3000
//e exibindo mensagem no console
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

