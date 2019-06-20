'use strict'

/**
 * Dependencies
 */

const express = require('express')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /
 */

router.get('/', (req, res) => [
  res.sendStatus(200)
])

/**
 * Export router
 */

module.exports = router
