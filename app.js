import express from 'express'
import songsRouter from './routers/songsRouter.js'
import errorsHandler from './middlewares/errorsHandler.js';
import notFound from './middlewares/notFound.js';

// set up server
const app = express();
const PORT = 3000;

// middleware 
app.use(express.json());

// prima route
app.get('/', (req, res) => {
    res.send('This is the Homepage');
})

// registrazione router
app.use('/songs', songsRouter);

// middlewares
app.use(errorsHandler)
app.use(notFound)

// start server
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));