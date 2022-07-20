const router = require('express').Router();
const userRoutes = require('./user-routes');
const storyRoutes = require('./story-routes');

router.use('/users', userRoutes);
router.use('/stories', storyRoutes);

module.exports = router;