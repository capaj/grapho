import { graphql } from 'graphql'
import grapho from './index'
import makeSchema from './index'

describe('grapho', () => {
  let schema
  beforeAll(function() {
    schema = makeSchema()
  })
  it('generates schema', async () => {
    expect(schema).toMatchSnapshot()
  })

  it('should fetch by id', async () => {
    const query = '{ hello }'

    expect(await graphql(schema, query)).toMatchSnapshot()
  })
})
