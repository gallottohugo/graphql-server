import { ApolloServer } from "apollo-server";
import { typeDefs } from "./type-defs.js";
import { resolvers } from "./resolvers.js";


const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`server ready at ${url}`)
})
