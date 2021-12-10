const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<b>Welcome to the homepage baby</b>");
});

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log("Wazzappppp");
});