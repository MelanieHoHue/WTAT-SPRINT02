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

exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName;
    res.render("index", {name : paramsName});
};