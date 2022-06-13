// socorro deeeeeeus
// socorro deus

const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({message: 'Ola mundo'});
})

app.get('/ola', (req, res) => {
    res.status(200).send({message: 'Oi sou Ola'});
})

app.listen(3001, () => {
    console.log('Api rodando na porta 3001');
})


