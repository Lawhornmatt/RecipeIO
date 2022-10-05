const router = require('express').Router();

const bookRoutes = require('./bookRoutes');
const homeRoutes = require('./homeRoutes');
const mattRoutes = require('./mattRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/', homeRoutes);
router.use('/books', bookRoutes);
router.use('/matt', mattRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
