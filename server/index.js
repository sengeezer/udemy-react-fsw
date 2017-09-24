const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

const PORT = process.env.PORT || 5000;

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
}, (accessToken) => {
  console.log(accessToken);
}),
);

// GoogleStrategy has internal identifier of 'google'

app.get('/auth/google', passport.authenticate('google', {
  // scope of access required from remote
  scope: ['profile', 'email'],
}),
);

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT);
