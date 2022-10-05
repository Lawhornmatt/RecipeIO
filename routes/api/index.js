const router = require('express').Router();
const blahRoutes = require('./blah-routes');


router.use('/blah', blahRoutes);

module.exports = router;
