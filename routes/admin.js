const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if(req.query.isAdmin) {
        next();
    }
    res.send('Kamu bukan admin')
})

router.get('/', (req, res) => {
    res.send('admin index')
})

module.exports = router