
const FuzzySet = require('fuzzyset.js')
const commonTlds = require('./common-tlds')
const commonSlds = require('./common-slds')
const commonTldsFuzzySet = new FuzzySet(commonTlds)
const commonSldsFuzzySet = new FuzzySet(commonSlds)

const beginsWithTld = tld =>
  commonTlds.find(commonTld => tld.indexOf(commonTld) === 0)

const amend = email => {
  email = email.trim().toLocaleLowerCase()
  if (!email) {
    return null
  }
  const emailParts = email.split('@')

  const domainParts = emailParts[1].split('.')

  let tld = domainParts.pop()
  let sld = domainParts.pop()

  // does not exist
  if (commonTlds.indexOf(tld) === -1) {
    const beginsWithResult = beginsWithTld(tld)

    if (beginsWithResult) {
      tld = beginsWithResult
    } else {
      const fuzzyReuslt = commonTldsFuzzySet.get(tld)
      if (fuzzyReuslt) {
        tld = fuzzyReuslt[0][1]
      }
    }
  }

  if (commonSlds.indexOf(sld) === -1) {
    const fuzzyReuslt = commonSldsFuzzySet.get(sld)
    if (fuzzyReuslt) {
      const [
        probability,
        result
      ] = fuzzyReuslt[0]
      // console.log(sld, probability, result)
      if (probability > 0.8) {
        sld = result
      }
    }
  }

  let subDomainParts = domainParts.join('.')
  if (subDomainParts) {
    subDomainParts += '.'
  }

  return `${emailParts[0]}@${subDomainParts}${sld}.${tld}`
}

module.exports = {
  amend
}
