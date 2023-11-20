const GoogleStrategy = require('passport-google-oauth20').Strategy;

const passport = require('passport');

const GOOGLE_CLIENT_ID = "399063486393-0dll7nhrr75f7qrkoi19n8u7b2pl44jn.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
 
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});