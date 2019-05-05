
const test = require('ava')
const amender = require('../src/amender')

const testCases = {
  '     ': null,
  'fake@gmail.com': 'fake@gmail.com',
  'fake.probably@aol.comssse': 'fake.probably@aol.com',
  'fake@gmail.comf': 'fake@gmail.com',
  'FAKE@CONSOLIDATED.NRT': 'fake@consolidated.net',
  'fake@gmail.vom': 'fake@gmail.com',
  'fake@rocketmail.ccom': 'fake@rocketmail.com',
  'fake@gmail.cim': 'fake@gmail.com',
  'fake@gmail.xom': 'fake@gmail.com',
  'fake@gmail.comm': 'fake@gmail.com',
  'fake@yahoo.dom': 'fake@yahoo.com',
  'fake@midiowa.netr': 'fake@midiowa.net',
  'fake@hotmail.con': 'fake@hotmail.com',
  'fake@fecompany.som': 'fake@fecompany.com',
  'fake@gmail.cvom': 'fake@gmail.com',
  'fake@yahoo.comk': 'fake@yahoo.com',
  'fake@att.met': 'fake@att.net',
  'fake@gmail.coom': 'fake@gmail.com',
  'fake@charter.bnet': 'fake@charter.net',
  'fake@yale.rdu': 'fake@yale.edu',
  'fake@aol.coml': 'fake@aol.com',
  'fake@vweizon.ney': 'fake@vweizon.net',
  'fake@sbcgloobal.nt': 'fake@sbcglobal.net',
  'fake@yahoo.comenjamin': 'fake@yahoo.com',
  'fake@yahoo.con': 'fake@yahoo.com',
  'fake@telus.nt': 'fake@telus.net',
  'fake@msn.comm': 'fake@msn.com',
  'fake@centurylink.nety': 'fake@centurylink.net',
  'fake@gmail.con': 'fake@gmail.com',
  'fake@yahoo.comm': 'fake@yahoo.com',
  'fake@aol.clm': 'fake@aol.com',
  'fake@aol.ciom': 'fake@aol.com',
  'fake@yahoo.cfom': 'fake@yahoo.com',
  'fake@yahoo.xcom': 'fake@yahoo.com',
  'fake@gmail.come': 'fake@gmail.com',
  'fake@augusta.edung': 'fake@augusta.edu',
  'fake@zoominternet.nett': 'fake@zoominternet.net',
  'fake@gte.met': 'fake@gte.net',
  'fake@columbiae.du': 'fake@columbia.edu',
  'fake@cinci.rr.vom': 'fake@cinci.rr.com',
  'fake@att.att': 'fake@att.net',
  'fake@gmail.comy': 'fake@gmail.com',
  'fake@sbcglobal.nt': 'fake@sbcglobal.net',
  'fake@aol.acom': 'fake@aol.com',
  'fake@att.nert': 'fake@att.net',
  'fake@aol.dom': 'fake@aol.com',
  'fake@amsat.ord': 'fake@amsat.org',
  'fake@aol.vom': 'fake@aol.com',
  'fake@comcast.nett': 'fake@comcast.net',
  'fake@comcast.ner': 'fake@comcast.net',
  'fake@aol.coom': 'fake@aol.com',
  'fake@msn.con': 'fake@msn.com'

}

Object.keys(testCases).forEach(badEmail => {
  const goodEmail = testCases[badEmail]
  test(`corrects ${badEmail} => ${goodEmail}`, t => {
    t.is(amender.amend(badEmail), goodEmail)
  })
})
