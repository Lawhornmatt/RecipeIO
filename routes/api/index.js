const router = require('express').Router();
const blahRoutes = require('./blah-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/blah', blahRoutes);

module.exports = router;
