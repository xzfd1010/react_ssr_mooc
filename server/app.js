const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1>first lesson</h1>
    <p>hello world</p>
</body>
</html>
`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))