
const test = require('ava')
const amender = require('../src/amender')
const userName = require('./support/helpers').magicId()

if (process.env.EMAIL_AMENDER_FAILING_TESTS) {
  // Sanity check test
  test('testing waste of resources', t => {
    t.is(
      amender.amend(userName + '@wastestuff.com'),
      userName + '@wastestuff.com'
    )
  })

  // Failing test cases go under here:
}
