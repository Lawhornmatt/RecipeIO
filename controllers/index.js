const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const mattRoutes = require('./mattRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/matt', mattRoutes);

module.exports = router;
