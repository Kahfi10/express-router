const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret'));
app.use(session ({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true}
}))

app.get('/signingcode', (req, res) => {
    res.cookie('ganteng', 'kahfi', { signed: true })
    res.send('cookie telah di set')
})

app.get('/verify', (req, res) => {
    const cookie = req.signedCookies
    res.send(cookie)
})

app.get('/count', (req, res) => {
    if(req.session.count) {
        req.session.count++
    } else{
        req.session.count = 1
    }
    res.send(`Count: ${req.session.count}`)
})

app.get('/register', (req, res) => {
    const { username = 'Kahfi' } = req.query
    req.session.username = username
    res.redirect('/dashboard')
})

app.get('/dashboard', (req, res) => {
    res.send(`Welcome ${req.session.username}`)
})

app.use('/admin', require('./routes/admin'));
app.use('/theater', require('./routes/theater'));

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})