/**
 * @typedef {Object} Pokemon
 * @property {number} id
 * @property {number} pokedexId
 * @property {string} name
 * @property {string} image
 * @property {string} sprite
 * @property {Stats} stats
 * @property {number} generation
 * @property {Evolution[]} evolutions
 * @property {Type[]} types
 */

/**
 * @typedef {Object} Stats
 * @property {number} HP
 * @property {number} speed
 * @property {number} attack
 * @property {number} defense
 * @property {number} specialAttack
 * @property {number} specialDefense
 * @property {number} special_attack
 * @property {number} special_defense
 */

/**
 * @typedef {Object} Evolution
 * @property {string} name
 * @property {number} pokedexId
 */

/**
 * @typedef {Object} Type
 * @property {number} id
 * @property {string} name
 * @property {string} image
 */

export {};