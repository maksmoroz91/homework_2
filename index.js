const express = require('express');
const filmRouter = require('./routers/film.routers');
const genreRouter = require('./routers/genre.routers');
const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.json());
app.use('/api', filmRouter);
app.use('/api', genreRouter);

app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));