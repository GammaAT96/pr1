require('dotenv').config()
const express = require('express') // or //import express from "express"
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello how are you!!')
})

app.get('/login', (req, res) => {
    res.send('<h1>login karlo</h1>')
})
app.get('/signup', (req, res) => {
    res.send('pehle signup karo')
})
app.listen(process.env.port, () => {
    console.log(`app listening on port ${port}`)
})
