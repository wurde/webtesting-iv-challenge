'use strict'

/**
 * Dependencies
 */

const supertest = require('supertest')
const app = require('../../app')

/**
 * Assertions
 */

describe('root_router.js', () => {
  test('NODE_ENV=test', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })

  test('GET /', async () => {
    let res = await supertest(app).get('/')

    expect(res.status).toBe(200)
    expect(Object.keys(res.headers).includes('x-powered-by')).toBeFalsy()
  })
})
