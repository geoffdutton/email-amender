
const test = require('ava')
const amender = require('../src/amender')

const userName = Math.random()
  .toString(36)
  .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15)

const testCases = {
  '@gmail.com': '@gmail.com',
  '@aol.comssse': '@aol.com',
  '@gmail.comf': '@gmail.com',
  '@CONSOLIDATED.NRT': '@consolidated.net',
  '@gmail.vom': '@gmail.com',
  '@rocketmail.ccom': '@rocketmail.com',
  '@gmail.cim': '@gmail.com',
  '@gmail.xom': '@gmail.com',
  '@gmail.comm': '@gmail.com',
  '@yahoo.dom': '@yahoo.com',
  '@midiowa.netr': '@midiowa.net',
  '@hotmail.con': '@hotmail.com',
  '@fecompany.som': '@fecompany.com',
  '@gmail.cvom': '@gmail.com',
  '@yahoo.comk': '@yahoo.com',
  '@att.met': '@att.net',
  '@gmail.coom': '@gmail.com',
  '@charter.bnet': '@charter.net',
  '@yale.rdu': '@yale.edu',
  '@aol.coml': '@aol.com',
  '@vweizon.ney': '@vweizon.net',
  '@sbcgloobal.nt': '@sbcglobal.net',
  '@yahoo.comenjamin': '@yahoo.com',
  '@yahoo.con': '@yahoo.com',
  '@telus.nt': '@telus.net',
  '@msn.comm': '@msn.com',
  '@centurylink.nety': '@centurylink.net',
  '@gmail.con': '@gmail.com',
  '@yahoo.comm': '@yahoo.com',
  '@aol.clm': '@aol.com',
  '@aol.ciom': '@aol.com',
  '@yahoo.cfom': '@yahoo.com',
  '@yahoo.xcom': '@yahoo.com',
  '@gmail.come': '@gmail.com',
  '@augusta.edung': '@augusta.edu',
  '@zoominternet.nett': '@zoominternet.net',
  '@gte.met': '@gte.net',
  '@columbiae.du': '@columbia.edu',
  '@cinci.rr.vom': '@cinci.rr.com',
  '@att.att': '@att.net',
  '@gmail.comy': '@gmail.com',
  '@sbcglobal.nt': '@sbcglobal.net',
  '@aol.acom': '@aol.com',
  '@att.nert': '@att.net',
  '@aol.dom': '@aol.com',
  '@amsat.ord': '@amsat.org',
  '@aol.vom': '@aol.com',
  '@comcast.nett': '@comcast.net',
  '@comcast.ner': '@comcast.net',
  '@aol.coom': '@aol.com',
  '@msn.con': '@msn.com'

}

Object.keys(testCases).forEach(badEmail => {
  const goodEmail = testCases[badEmail]

  test(`corrects ${badEmail} => ${goodEmail}`, t => {
    t.is(
      amender.amend(userName + badEmail),
      userName + goodEmail
    )
  })
})

test('returns null if passed value is falsy', t => {
  t.is(amender.amend('    '), null)
})
