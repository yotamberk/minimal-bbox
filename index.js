const area = require('@turf/area').default
const bbox = require('@turf/bbox').default
const convex = require('@turf/convex').default
const bboxPolygon = require('@turf/bbox-polygon').default
const transformRotate = require('@turf/transform-rotate').default

const minimalBbox = (polygon) => {
    const polygonConvex = convex(polygon)
    let minimalBBox = bboxPolygon(bbox(polygonConvex))
    let minimalBBoxArea = area(minimalBBox)

    const angleDelta = 1

    let angle = 0
    while (angle <= 360) {
        angle += angleDelta
        const rotatedPolygon = transformRotate(polygonConvex, angle)
        console.log(JSON.stringify(rotatedPolygon.geometry.coordinates))
    }
    return minimalBBoxArea
}

module.exports = minimalBbox