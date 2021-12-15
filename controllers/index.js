const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const postRoutes = require('./post-routes.js');
const signupRoutes = require('./signup-routes.js');
const loginRoutes = require('./login-routes.js');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/signup', signupRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
