const express = require('express');
const app = express();
const port = 8541;

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));
app.use('/static', express.static('../dist'));
app.listen(port, () => console.log(`Simple React is listening on port ${port}!`));