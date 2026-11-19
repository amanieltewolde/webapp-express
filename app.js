import express from 'express'

// set up server
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('This is the Homepage');
})

// start server
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));