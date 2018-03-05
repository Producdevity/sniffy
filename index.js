
const fn = (tagName, val) => {
  console.log(`[${tagName}]`, val)
  return val
}

const api = fn.bind(null, 'SNIFFY')

api.tag = tagName => fn.bind(null, tagName)

module.exports = api
