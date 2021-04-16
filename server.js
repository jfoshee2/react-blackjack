require('dotenv').config();
const express = require('express');
let app = express();

app.use(express.static('./build'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});
