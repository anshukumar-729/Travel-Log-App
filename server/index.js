const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(3010, () => {
    console.log("Started")
})