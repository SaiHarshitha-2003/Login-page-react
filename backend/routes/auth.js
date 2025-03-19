const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Import your User model
const router = express.Router();

// LOGIN OR REGISTER ROUTE
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        let user = await User.findOne({ username });

        if (user) {
            // User found, verify password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: "Invalid Credentials" });
            }
            return res.status(200).json({ message: "Login Successful", user });
        } else {
            // User not found, register new user
            console.log("User Not Found. Registering New User...");

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                username,
                password: hashedPassword
            });

            await newUser.save();
            return res.status(201).json({ message: "User Registered Successfully", newUser });
        }
    } catch (error) {
        console.error("Error in Login/Register:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
