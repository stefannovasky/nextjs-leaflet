import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPH_CMS_HOST || ''

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`
  }
})

export default client
