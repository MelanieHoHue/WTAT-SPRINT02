exports.userSignUpProcessor = (req, res) => {
    console.log(req.body);
    res.send(`Welcome ${req.body.firstname}! You have successfully signed in!`);
}