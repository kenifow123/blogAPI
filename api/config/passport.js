const passport = require('passport');
const bcrypt = require('bcryptjs');
const { prisma } = require('../lib/prisma.js');
const { Strategy : JwtStrategy, ExtractJwt } = require('passport-jwt');

passport.use(
    new JwtStrategy({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        },
        async (payload, done) => {
            try {
                const user = await prisma.users.findUnique({
                    where: { id: payload.userId }
                });

                if (!user) {
                    return done(null, false, { message: "Incorrect username" });
                }

                const match = await bcrypt.compare(payload.password, user.password);
                if (!match) {
                    return done(null, false, { message: "Incorrect password" });
                }
                console.log('login success');
                return done(null, user);
            } catch (err) {
                return done(err, false);
            }
        }));
