const express = require('express');
const {continueSession} = require("pg/lib/sasl");

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Yhuuu');
});

app.listen(PORT, () => console.log(`Сервер запушен на порту ${PORT}`));
