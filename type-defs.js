import { gql } from "apollo-server";

export const typeDefs = gql`
type Alien {
  id: Int!
  name: String!
  lastName: String!
  fullName: String!
  planetCode: String!
  planet: Planet
  powerIds: [Int]!
  powers: [Power]
}

type Planet {
  name: String!
  code: String! 
}

type Power {
  id: Int!
  name: String!
  score: Int!
}

type Query {
  aliensCount: Int!
  getAliens: [Alien]!
  findAlienById(id: Int!): Alien!
  findAliensByName(name: String!): [Alien]!
}
`
