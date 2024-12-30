// controllers/authController.js
import passport from '../config/passportConfig.js';

export const googleAuth = passport.authenticate('google', { scope: ['email', 'profile'] });

export const googleAuthCallback = passport.authenticate('google', {
  successRedirect: '/protected',
  failureRedirect: '/auth/google/failure',
});

export const protectedRoute = (req, res) => {
  if (req.user) {
    res.send(`Hello ${req.user.displayName}`);
  } else {
    res.sendStatus(401);
  }
};

export const logout = (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    req.session.destroy();
    res.send('Goodbye!');
  });
};

export const authFailure = (req, res) => {
  res.send('Failed to authenticate.');
};
