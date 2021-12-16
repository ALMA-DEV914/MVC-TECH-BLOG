const router = require('express').Router();
//require all connected file routes 
const apiRoutes = require('./api');
const homepageRoutes = require('./home-routes.js');
const postRoutes = require('./post-routes.js');
const signupRoutes = require('./signup-routes.js');
const loginRoutes = require('./login-routes.js');
const logoutRoutes = require('./logout-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const editRoutes = require('./edit-routes.js');


//callback function to use the routes fora certain file
router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/signup', signupRoutes);
router.use('/logout', logoutRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/edit', editRoutes);

module.exports = router;
