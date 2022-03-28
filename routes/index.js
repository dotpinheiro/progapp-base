const router = require('express').Router();
const exampleRouter = require('./example.router');

// Routes declarations
router.use('/example', exampleRouter);

module.exports = router;
