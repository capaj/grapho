import makeSchema from '../src'
import { graphql } from 'graphql'

const schema = makeSchema()
var query = '{ hello }'

graphql(schema, query).then(result => {
  console.log(result)
})
