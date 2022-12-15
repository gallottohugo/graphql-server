import { aliens, planets, powers } from "./constants.js";

export const resolvers = {
  Query: {
    aliensCount: () => aliens.length,
    getAliens: () => aliens,
    findAlienById: (root, args) => {
      const { id } = args
      return aliens.find(item => item.id === id)
    },
    findAliensByName: (root, args) => {
      const { name } = args
      return aliens.filter( item => item.name.startsWith(name))
    }
  },
  Alien: {
    fullName: (root) => `${root.name} ${root.lastName}`,
    planet: (root) => {
      return planets.find(planet => planet.code === root.planetCode)
    },
    powers: (root) => {
      return root.powerIds.map(item => powers.find(power => power.id === item)).filter(Boolean)
    }
  }
}
