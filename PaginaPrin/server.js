const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/PaginaPrin'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/PaginaPrin'}),
);

app.listen(process.env.PORT || 4200);