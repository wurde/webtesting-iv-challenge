'use strict'

/**
 * Define middleware
 */

function render_error(err, req, res, next) {
  err.status = err.status || 500
  err.message = err.message || 'Internal Server Error'

  console.error(err.message)

  res.status(err.status).json({ error: { status: err.status, message: err.message }})
}

/**
 * Export middleware
 */

module.exports = render_error
