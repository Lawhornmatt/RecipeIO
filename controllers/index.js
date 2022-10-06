const router = require('express').Router();

const bookRoutes = require('./bookRoutes');
const homeRoutes = require('./homeRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/', homeRoutes);
router.use('/books', bookRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;