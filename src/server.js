const express = require('express');

const app = express();

app.get('/criarUsuario/:nome', (requisicao, resposta) => {
    const { nome } = requisicao.params;
    resposta.json({"nome":nome});
});

app.listen(3334);