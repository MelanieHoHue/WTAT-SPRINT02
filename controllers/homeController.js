exports.sendHomeView = (req, res) => {
    res.send("Welcome");
};

exports.showIncomingData = (req,res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST was successfull!")
}

exports.sendReqParameters = (req, res) => {
    let veg = req.params.vegetables;
    res.send(`This is the page for ${veg}`);
};

exports.logReqPaths = (req, res) => {
    console.log(`Request was made for ${req.url}`);
}