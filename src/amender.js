
const FuzzySet = require('fuzzyset.js')
const commonTLDs = require('./common-tlds')
const commonSLDs = require('./common-slds')
const commonTLDsFuzzySet = new FuzzySet(commonTLDs)
const commonSLDsFuzzySet = new FuzzySet(commonSLDs)

const beginsWithTLD = TLD =>
  commonTLDs.find(commonTLD => TLD.indexOf(commonTLD) === 0)

// const beginsWithSLD = SLD =>
//   commonSLDs.find(commonSLD => SLD.indexOf(commonSLD) === 0)

const amend = email => {
  email = email.trim().toLowerCase()
  if (!email) {
    return null
  }

  const [
    userName,
    domain
  ] = email.split('@')

  const domainParts = domain.replace(/[.]+/g, '.').split('.')

  // @TODO: Handle two-part TOLDs like .co.uk
  let TLD = domainParts.pop()
  let SLD = domainParts.pop()

  let subDomainParts = domainParts.join('.')
  if (subDomainParts) {
    subDomainParts += '.'
  }

  // does not exist
  if (commonTLDs.indexOf(TLD) === -1) {
    const beginsWithResult = beginsWithTLD(TLD)

    if (beginsWithResult) {
      TLD = beginsWithResult
    } else {
      const fuzzyReuslt = commonTLDsFuzzySet.get(TLD)
      if (fuzzyReuslt) {
        TLD = fuzzyReuslt[0][1]
      }
    }
  }

  if (commonSLDs.indexOf(SLD) === -1) {
    const fuzzyReuslt = commonSLDsFuzzySet.get(SLD)
    if (fuzzyReuslt) {
      const [
        probability,
        result
      ] = fuzzyReuslt[0]
      // console.log(sld, probability, result)
      if (probability > 0.8) {
        SLD = result
      }
    }
  }

  return `${userName}@${subDomainParts}${SLD}.${TLD}`
}

module.exports = {
  amend
}
