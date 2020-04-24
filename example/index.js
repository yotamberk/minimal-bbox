const { polygon } = require('@turf/helpers')
const minimalBbox = require('../index')

const polygon1 = polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
const polygon1minimalBbox = minimalBbox(polygon1)

console.log(polygon1minimalBbox)