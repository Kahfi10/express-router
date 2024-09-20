const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));

app.get('/signingcode', (req, res) => {
    res.cookie('ganteng', 'kahfi', { signed: true })
    res.send('cookie telah di set')
})

app.get('/verify', (req, res) => {
    const cookie = req.signedCookies
    res.send(cookie)
})

app.use('/admin', require('./routes/admin'));
app.use('/theater', require('./routes/theater'));

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})