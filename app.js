const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<b>Welcome to the homepage baby</b>");
});

app.listen(3000, () => {
    console.log("Wazzappppp");
});