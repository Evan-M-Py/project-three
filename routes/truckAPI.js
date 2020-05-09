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

module.exports = function (app) {
    app.get("/api/truck/:userID", function (req, res) {
        db.Truck.findAll({
            // where: {
            //     userID: req.params.userID
            //   }
        }).then(function (crusine_db) {
            res.json(crusine_db);
        });
    });

}