"use strict";

const port = 3000,
express = require("express"),
app = express();

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send(req.query);
});

app.listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
});