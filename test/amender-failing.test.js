
const test = require('ava')
const amender = require('../src/amender')
const userName = require('./support/helpers').magicId()

if (process.env.EMAIL_AMENDER_FAILING_TESTS) {
  // Failing test cases
  test('testing @cableone.ent', t => {
    t.is(
      amender.amend(userName + '@cableone.ent'),
      userName + '@cableone.net'
    )
  })
}
