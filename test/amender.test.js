
const test = require('ava')
const amender = require('../src/amender')

const userName = require('./support/helpers').magicId()

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
  '@msn.con': '@msn.com',

  // more cases
  '@adams.neet': '@adams.net',
  '@ameritech.met': '@ameritech.net',
  '@aol.ccom': '@aol.com',
  '@aol.comb': '@aol.com',
  '@aol.comemail': '@aol.com',
  '@aol.con': '@aol.com',
  '@aol.lcolm': '@aol.com',
  '@att.n': '@att.net',
  '@att.ner': '@att.net',
  '@att.ney': '@att.net',
  '@bell.ney': '@bell.net',

  // see below
  // '@bellsouth.bell': '@bellsouth.net',

  '@bellsouth.met': '@bellsouth.net',
  '@bellsouth.nrt': '@bellsouth.net',
  '@bigpond.con': '@bigpond.com',

  // see below
  // '@cableone.ent': '@cableone.net',

  '@columbus.rr.cxom': '@columbus.rr.com',
  '@comcast.neet': '@comcast.net',
  '@comcast.nent': '@comcast.net',
  '@comcast.ney': '@comcast.net',
  '@consolidated.nrt': '@consolidated.net',
  '@cox.nert': '@cox.net',
  '@embarqmail.coms': '@embarqmail.com',
  '@embarqmail.ocm': '@embarqmail.com',
  '@excite.ccom': '@excite.com',
  '@g.mail': '@g.mail',
  '@gmail.ccom': '@gmail.com',
  '@gmail.cojm': '@gmail.com',
  '@gmail.colm': '@gmail.com',
  '@gmail.coma': '@gmail.com',
  '@gmail.comethiong': '@gmail.com',
  '@gmail.comk': '@gmail.com',
  '@gmail.coml': '@gmail.com',
  '@gmail.commama': '@gmail.com',
  '@gmail.comn': '@gmail.com',
  '@gmail.comom': '@gmail.com',
  '@gmail.comse': '@gmail.com',
  '@gmail.comz': '@gmail.com',
  '@gmail.comzzzzzzzzzzzz': '@gmail.com',
  '@gmail.cpm': '@gmail.com',
  '@gmail.cxom': '@gmail.com',
  '@gmail.ocm': '@gmail.com',
  '@hotmai.coml': '@hotmail.com',
  '@hotmail.clm': '@hotmail.com',
  '@hotmail.coming': '@hotmail.com',
  '@hotmail.coom': '@hotmail.com',
  '@igc.og': '@igc.org',
  '@live.comm': '@live.com',
  '@live.como': '@live.com',

  // see below
  // '@maine.rrcom': '@maine.rr.com',

  '@metrocast.netr': '@metrocast.net',
  '@nycap.rr..com': '@nycap.rr.com',
  '@outlook.coom': '@outlook.com',
  '@outlook.ocm': '@outlook.com',
  '@q.comm': '@q.com',
  '@s.dcsdk12.or': '@s.dcsdk12.org',
  '@sbcglobal.neet': '@sbcglobal.net',
  '@sking.biiz': '@sking.biz',
  '@teamonecomm.c': '@teamonecomm.com',
  '@verizon.nett': '@verizon.net',
  '@verizon.nt': '@verizon.net',
  '@vt.eduu': '@vt.edu',
  '@yahoo.cojm': '@yahoo.com',
  '@yahoo.coma': '@yahoo.com',
  '@yahoo.come': '@yahoo.com',
  '@yahoo.comh': '@yahoo.com',
  '@yahoo.comn': '@yahoo.com',
  '@yahoo.comoooo': '@yahoo.com',
  '@yahoo.comrd': '@yahoo.com',
  '@yahoo.coom': '@yahoo.com',
  '@yahoo.cpm': '@yahoo.com',
  '@yahoo.ocm': '@yahoo.com',
  '@sbcglobal.nbet': '@sbcglobal.net',
  '@terranova.met': '@terranova.net'
}

Object.keys(testCases).forEach((badEmail, i) => {
  const goodEmail = testCases[badEmail]

  let _userName = userName
  if (i === 2) {
    // add an extra dot in front of the email
    _userName = '.' + _userName
  }

  test(`corrects ${badEmail} => ${goodEmail}`, t => {
    t.is(
      amender.amend(_userName + badEmail),
      userName + goodEmail
    )
  })
})

test('returns null if passed value is falsy', t => {
  t.is(amender.amend('    '), null)
})

// These are one off test cases that should probably
// be organized at some point
//
// As you solve the test cases in amender-failing.test.js,
// paste them below this line
test('testing @bellsouth.bell', t => {
  t.is(
    amender.amend(userName + '@bellsouth.bell'),
    userName + '@bellsouth.net'
  )
})

test('testing @maine.rrcom', t => {
  t.is(
    amender.amend(userName + '@maine.rrcom'),
    userName + '@maine.rr.com'
  )
})

test('testing @rrcom', t => {
  t.is(
    amender.amend(userName + '@rrcom'),
    userName + '@rr.com'
  )
})

test('testing @cableone.ent', t => {
  t.is(
    amender.amend(userName + '@cableone.ent'),
    userName + '@cableone.net'
  )
})
