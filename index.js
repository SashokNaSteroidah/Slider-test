const express = require('express');
require('dotenv').config()
const PORT = process.env.PORT || 3000
const main = (".public/main.js")

const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(main)
})

app.listen(PORT, () => console.log(`Server start on ${PORT}`))

