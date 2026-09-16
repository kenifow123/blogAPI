const bcrypt = require("bcryptjs");
const { prisma } = require("../lib/prisma.js");
const jwt = require("jsonwebtoken");


const loginPost = async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: req.body.username
            }
        })

        if (!user) {
            res.status(401).json({message: 'user not found'})
        }

        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            res.status(401).json({message: 'wrong password'})
        }

        console.log('login success');
        jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
            res.json({
                token
            });
        })
    } catch (err) {
        res.status(401).json({message: err.message})
    }
}

module.exports = {
    loginPost
};