const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =
  "355139313184-0l1qo34nui9nivlmjbgh1ma237ud1b0g.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://www.example.com/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
