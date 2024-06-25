const User = require('../Models/User.Model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
 

const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
const timestamp = new Date().toLocaleDateString('en-US', options);

const jwtSecretKey = process.env.JWTSECRET_KEY;

const userSignup = async (req, res) => {
    const { name, email, password, token } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already registered. Please log in."
            });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword, token });
        await newUser.save();

        res.json({
            success: true,
            message: "User registered successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({
                success: false,
                message: "User not registered. Please register first."
            });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials. Please try again."
            });
        }

        const payload = {
            exp: Math.floor((Date.now() / 1000) + 3600),
            email: existingUser.email,
            _id: existingUser._id,
        }

        if (!jwtSecretKey) {
            return res.status(500).json({
                success: false,
                message: "Internal server error: JWT Secret Key is missing"
            });
        }

        const token = jwt.sign(payload, jwtSecretKey);
        await User.findByIdAndUpdate(existingUser._id, { token: token }) 

          res.json({
            success: true,
            data: { ...existingUser._doc, token },
            message: "User logged in successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const userLogout = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];;
    const decodedToken = jwt.decode(token);
    await User.findByIdAndUpdate(decodedToken._id, { token: "" });
    res.json({
        success: true,
        message: "User logged out successfully"
    });
}

module.exports = {
    userSignup,
    userLogin,
    userLogout
}
