const passport = require('passport');

// GoogleStrategy has internal identifier of 'google'

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    // scope of access required from remote
    scope: ['profile', 'email'],
  }),
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
