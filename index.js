const express = require('express')
const app = express();
const PORT = 5500;

app.use(express.static('./'))

app.get('/', (req, res) => {
    res.render('index.html')
})


app.listen(PORT, () => {
    console.log(`Run listend port ${PORT}`)
})
