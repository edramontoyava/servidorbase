const express = require ('express');
const morgan = require('morgan');

require('./utils/mongoConnection');

const booksRouter = require('./routers/books.router');
const moviesRouter = require('./routers/movies.router');
const usersRouter = require('./routers/users.router');

const app= express();
const port = 3003;

app.use (morgan('dev'));

app.get('/', (req, res) => {
    res.send('Bienvenido a Libreria API')
})

app.use(express.json({limit: '50mb'}));
app.use('/books', booksRouter);
app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log("Servidor iniciado en http://localhost:" + port);
})