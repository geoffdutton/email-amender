# Email Amender
[![Build Status](https://travis-ci.com/geoffdutton/email-amender.svg?branch=master)](https://travis-ci.com/geoffdutton/email-amender)
[![npm version](https://badge.fury.io/js/email-amender.svg)](https://badge.fury.io/js/email-amender)
[![codecov](https://codecov.io/gh/geoffdutton/email-amender/branch/master/graph/badge.svg)](https://codecov.io/gh/geoffdutton/email-amender) [![Greenkeeper badge](https://badges.greenkeeper.io/geoffdutton/email-amender.svg)](https://greenkeeper.io/)

An opinionated library on how to correct fat-figured and mis-typed email addresses from user input.

## How it Works
1) It trims and lowercases the input email address. If it's falsy, i.e. it returns null.
2) Then it splits the email string into domain, TLD (Top Level Domain), and SLD (Second Level Domain). **Note**: `.co.uk` among other non-US TLDs would break this, which will be addressed in future versions of Email Amender.
3) It checks to see if the `TLD` exists in a common [list of TLDs](/src/common-tlds.js). If so it skips to the next step. Otherwise:
    1) It first checks to the ceo the user input TLD begins with one of the common TLDs, which is a cheap check to see if extra letters happened to be added on. An example would be when a user thinks they've moved to the nexxt form field, and started typing more into the email address input field.
    2) If there is nothing found, it uses [fuzzyset.js](http://glench.github.io/fuzzyset.js/) to fine the nearest probable match to one of the common TLDs.
4) This is super primitive right now._ It checks to see if the `SLD` exists in a common [list of SLDs](/src/common-slds.js). If the SLD doesn't exist in the preset list, it checks to see if there's one using `fuzzyset.js`, but requires an 80% probability. See the TODOs.

## Development
Just run `yarn`, and then run `yarn test` to see if everything is working right.

To try to solve the failing tests, use `yarn test:failing` to check your work.

## Credits
- Jaideep Srivastava ([@jaideepsrivastava](https://github.com/jaideepsrivastava))
