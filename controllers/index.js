const router = require('express').Router();

const bookRoutes = require('./bookRoutes');
const homeRoutes = require('./homeRoutes');
const mattRoutes = require('./mattRoutes');

router.use('/', homeRoutes);
router.use('/books', bookRoutes);
router.use('/matt', mattRoutes);

module.exports = router;
