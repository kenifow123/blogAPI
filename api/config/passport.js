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
                // console.log(payload);
                const user = await prisma.user.findUnique({
                    where: { id: payload.user.id}
                });
                if (!user) {
                    return done(null, false);
                }
                return done(null, user);
            } catch (err) {
                return done(err, false);
            }
        }));
