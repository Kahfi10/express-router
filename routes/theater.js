const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const { user = 'No-name', token = '' } = req.cookies
    res.send(`Hello ${user}, token anda ${token}`)
})

router.get('/create', (req, res) => {
    res.send('theater create')
})

router.post('/', (req, res) => {
    res.send('theater store')
})

router.get('/:id', (req, res) => {
    res.send('theater show')
})

router.get('/:id', (req, res) => {
    res.send('theater update')
})

router.delete('/:id', (req, res) => {
    res.send('theater delete')
})

module.exports = router

