import express from 'express';
import passport from '../config/passportConfig.js';

const router = express.Router();

router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { 
    successRedirect: '/protected', 
    failureRedirect: '/auth/failure' 
  })
);

router.get('/protected', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Welcome, ${req.user.displayName}`);
  } else {
    res.sendStatus(401);
  }
});

router.get('/auth/failure', (req, res) => res.send('Failed to authenticate.'));
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    req.session.destroy();
    res.send('Goodbye!');
  });
});

export default router;
