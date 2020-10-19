/*
 * This installs a Makefile into any project that has fakefile as a dependency.
 * We'll overwrite known Fakefiles, but no unknown Makefiles via sha1 matchting.
 *
 * No babel ES6 transpilation or other hipster goodies in here,
 * regard this as a simple procedural bash script, that's more portable : )
 *
 * The meat of this project can be found in ./Makefile
 */

const fs     = require('fs-extra')
const path   = require('path')
const crypto = require('crypto')

const rootDir        = process.env.FAKEFILE_PROJECT || path.normalize(path.join(__dirname, '..', '..'))
const dstPackagePath = rootDir + '/package.json'
const dstMakePath    = rootDir + '/Makefile'
let   dstPackage     = {}
let   dstMakeBody    = ''
let   dstMakeSha     = ''
const srcMakePath    = path.normalize(path.join(__dirname, 'Makefile'))
const srcMakeBody    = fs.readFileSync(srcMakePath)
const srcMakeSha     = crypto.createHash('sha1').update(srcMakeBody).digest('hex')
const knownShas      = [
  'b9c952534064fe425bb109814530c8e60038523b',
  '6f7a23c0a22515359983075ea3dfd2c0215bea41',
]

try {
  dstMakeBody = fs.readFileSync(dstMakePath)
  dstMakeSha = crypto.createHash('sha1').update(dstMakeBody).digest('hex')
} catch (e) {
  dstMakeBody = false
}

try {
  dstPackage = require(dstPackagePath)
} catch (e) {
  dstPackage = false
}

if (!dstPackage.name) {
  console.error('No valid package.json found at ' + dstPackagePath + '. Skipping. ')
  process.exit(0)
}

if (!dstMakeBody || knownShas.indexOf(dstMakeSha) > -1) {
  if (srcMakeSha === dstMakeSha) {
    console.error('Already on the right Fakefile. Skipping. ')
    process.exit(0)
  }

  console.error('No or known Makefile found at ' + srcMakePath + ' installing ours to ' + dstMakePath + ' ')
  try {
    fs.copySync(srcMakePath, dstMakePath, { clobber: true })
  } catch (e) {
    console.error('I was unable to install, but won\'t error out hard as this is not worth blocking e.g. deploys for. ')
    console.error(e.message)
  }
  process.exit(0)
}

console.error('I found a Makefile at ' + dstMakePath + ' that I do not know. (sha1: ' + dstMakeSha + ')')
console.error('I will not risk overwriting it. ')
console.error('Remove it first manually and install Fakefile again. ')
