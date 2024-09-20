const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if(req.query.isAdmin) {
        next();
    }
    res.send('Kamu bukan admin')
})

router.get('/', (req, res) => {
    res.cookie('token', '382982878abcdef')
    res.cookie('kahfi', 'admin')
    res.send('admin index')
})

module.exports = router