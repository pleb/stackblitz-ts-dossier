import { randomElement, randomNumberBetween, randomString } from '@makerx/ts-dossier'
import { DataBuilder, dossierProxy } from '@makerx/ts-dossier'
import { Shape } from './shape'

function generateSideLengths(sides: number) {
  return [...Array(sides).keys()].map((_) => randomNumberBetween(1, 999))
}

class ShapeBuilder extends DataBuilder<Shape> {
  constructor() {
    const sides = randomNumberBetween(1, 4)
    super({
      name: randomString(10, 20),
      sides,
      sideLengths: generateSideLengths(sides),
      colour: randomElement(['Blue', 'Red', 'Yellow', 'Green']),
    })
  }

  public withSides(sides: number) {
    this.with('sides', sides)
    if (this.thing.sideLengths.length != sides) {
      this.with('sideLengths', generateSideLengths(sides))
    }
    return this
  }

  public asSquare(length: number) {
    this.thing = {
      ...this.thing,
      name: 'Square',
      sides: 4,
      sideLengths: [length, length, length, length],
    }
    return this
  }

  public asIsoscelesTriangle(length: number, perimeter: number) {
    this.thing = {
      ...this.thing,
      name: 'Isosceles triangle',
      sides: 3,
      sideLengths: [length, length, perimeter - length * 2],
    }
    return this
  }
}

export const shapeBuilder = dossierProxy<ShapeBuilder, Shape>(ShapeBuilder)
