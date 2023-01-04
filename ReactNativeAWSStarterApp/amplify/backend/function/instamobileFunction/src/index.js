const { resolvers } = require('./resolvers')

exports.handler = async (event, context) => {
  const typeHandler = resolvers[event.typeName]

  if (typeHandler) {
    const resolver = typeHandler[event.fieldName]
    if (resolver) {
      return resolver(event)
    }
  }
  throw new Error('Resolver not found.')
}
