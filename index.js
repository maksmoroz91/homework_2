const express = require('express');
const filmRouter = require('./routers/film.routers');

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.json());
app.use('/api', filmRouter);

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));


app.get('/', (req,res) => {
   res.send('WORK!!!!')
});