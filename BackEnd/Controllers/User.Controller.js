const User = require('../Models/User.Model');
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
const timestamp = new Date().toLocaleDateString('en-US', options)
const userSignup = async (req, res) => {
    const { name, email, password,token } = req.body;
    const newUser = new User({ name, email, password,token });
    await newUser.save();
    res.json({
        success: true,
        message: "user register successfully"
    })
}
const userLogin = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({
        success: true,
        message: "user register successfully"
    })
}
const userLogout = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({
        success: true,
        message: "user register successfully"
    })
}

module.exports = {
    userSignup,
    userLogin,
    userLogout
}