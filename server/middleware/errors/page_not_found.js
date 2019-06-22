'use strict'

/**
 * Define middleware
 */

function page_not_found(req, res, next) {
  let err = new Error()
  err.status  = 404
  err.message = 'Not found'

  next(err)
}

/**
 * Export middleware
 */

module.exports = page_not_found
