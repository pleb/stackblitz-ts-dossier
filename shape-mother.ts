import { shapeBuilder } from './shape-builder'

export const shapeMother = {
  blueSquare: () => {
    return shapeBuilder().asSquare(20).withColour('Blue')
  },
  greenTriangle: () => {
    return shapeBuilder().withName('Triangle').withSides(3).withColour('Green')
  },
  redIsoscelesTriangle: () => {
    return shapeBuilder().asIsoscelesTriangle(20, 45).withColour('Red')
  },
}
