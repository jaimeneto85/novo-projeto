import express from 'express';

const app = express();

app.get('/', (req, res) => {
    // conectar com o banco de dados
    // fazer validações
    console.log('req', req.query)
    const name = req.query.name;
    if (!name) {
        return res.status(400).send('Name is required');
    }
    res.send(`Oi, ${name}`);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
