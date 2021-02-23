const crypto = require('crypto')
const babelJest = require('babel-jest')

module.exports = {
  process: require('./process'),
  getCacheKey: function getCacheKey(fileData, filename, configString) {
    return crypto
      .createHash('md5')
      .update(babelJest.getCacheKey(fileData, filename, configString), 'hex')
      .digest('hex')
  }
}
