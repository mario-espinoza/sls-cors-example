const { version, name } = require('./package.json')

module.exports.info = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        version,
        name,
        input: event
      },
      null,
      2
    )
  }
}
