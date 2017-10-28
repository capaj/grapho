import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQL,
  GraphQLString,
  printSchema
} from 'graphql'
import Animal from '../sample-app/src/models/Animal'

function buildModelSchema(model) {
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: model.tableName,
      fields: {
        hello: {
          type: GraphQLString,
          resolve() {
            return 'world'
          }
        }
      }
    })
  })
}

const schema = buildModelSchema(Animal)
console.log(printSchema(schema))
