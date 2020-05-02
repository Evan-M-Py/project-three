// const Truck = require("../models/Truck");
const db = require("../models")
const passport = require('passport')
const jwtStrat = require('passport-jwt').Strategy
const localStrat = require('passport-local').Strategy
const extractJWT = require('passport-jwt').ExtractJwt

const opts = {
    jwtFromRequest: extractJWT.fromAuthHeaderWithScheme('token'),
    secretOrKey: 'jwt-secret',
  };

  passport.use(
    'jwt',
    new jwtStrat(opts, (jwt_payload, done) => {
        console.log(jwt_payload)
        done()
    //   try {
    //     User.findOne({
    //       where: {
    //         id: jwt_payload.id,
    //       },
    //     }).then(user => {
    //       if (user) {
    //         console.log('user found in db in passport');
    //         done(null, user);
    //       } else {
    //         console.log('user not found in db');
    //         done(null, false);
    //       }
    //     });
    //   } catch (err) {
    //     done(err);
    //   }
    }),
  );

module.exports = function(app) {
    //Truck API routes go here

    app.post("/truck", function(req, res, next) {
        // check req.headers.token matches the users token
        // using jwt passport
        passport.authenticate('jwt', {session: false}, (err, user, info)=>{
            // console.log(user);
        })(req, res, next)
        // db.Truck.create({
        //     truck_name: req.body.truckName
        //     // add in the user ID as foreign key using token?

        // }).then(response => {
        //     res.json(true);
        // })
    })
}