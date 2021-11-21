const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const GOOGLE_CLIENT_ID =
  "355139313184-0l1qo34nui9nivlmjbgh1ma237ud1b0g.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "0ac1bed2dbf4cdbaf4b6";
GITHUB_CLIENT_SECRET = "66f4bd47870450828ee2aa01e3d282a8f437c1b8";

FACEBOOK_APP_ID = "";
FACEBOOK_APP_SECRET = "";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passeport.serializerUser((user, done) => {
  done(null, user);
});

passeport.deserializerUser((user, done) => {
  done(null, user);
});
