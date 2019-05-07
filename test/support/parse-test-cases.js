
const path = require('path')
const fs = require('fs')

/**
 * Takes a list of bad emails in input.txt and
 * parses out the domain name to create more
 * test cases.
 *
 * Note: input.txt is ignore by git, so you need
 * to create your own.
 */

function main () {
  const data = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
    .trim()
    .split('\n')
    .map(e => e.toLowerCase().trim().split('@')[1])
    .sort()

  // for uniqueness
  const output = Array.from(new Set(data))
    .reduce((accm, emailPart) => {
      accm[`@${emailPart}`] = `@${emailPart}`
      return accm
    }, {})
  console.log(JSON.stringify(output, null, 2))
}

main()
