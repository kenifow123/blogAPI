const bcrypt = require("bcryptjs");
const { prisma } = require("../lib/prisma.js");

const signupPost = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const hashedName = await bcrypt.hash(req.body.name, 10);
        const user = await prisma.user.create({
            data : {
                email: req.body.email,
                name: hashedName,
                password: hashedPassword,
                username: req.body.username,
            }
        })

        console.log('Created user:', user);
        res.json({
            message: 'Created user:'
        });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    signupPost,
}