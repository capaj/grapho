import { graphql } from 'graphql'
import buildModelSchema from './schema-builder'

describe('grapho', () => {
  let schema
  beforeAll(function() {
    schema = buildModelSchema()
  })
  it('generates schema', async () => {
    expect(schema).toMatchSnapshot()
  })

  it('should fetch by id', async () => {
    const query = '{ hello }'

    expect(await graphql(schema, query)).toMatchSnapshot()
  })
})
