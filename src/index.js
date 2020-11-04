var express = require('express');
var app = express();


app.get("/", (req, res) => {
    res.send("<h1>Ola Carlinhossss</h1>")
})

app.listen(3000, () => console.log('Server deu bom'))