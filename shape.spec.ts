import { describe, expect, it } from '@jest/globals'
import { shapeMother } from './shape-mother'

describe('The square', () => {
  it('has four sides', () => {
    const shape = shapeMother.blueSquare().build()
    expect(shape.sides).toBe(4)
  })
  it('has four sides of equal length', () => {
    const shape = shapeMother.blueSquare().build()
    expect(shape.sideLengths).toEqual(expect.arrayContaining([...Array(4)].map((_) => shape.sideLengths[0])))
  })
  it('is named correctly', () => {
    const shape = shapeMother.blueSquare().build()
    expect(shape.name).toBe('Square')
  })
  it('is coloured blue', () => {
    const shape = shapeMother.blueSquare().build()
    expect(shape.colour).toBe('Blue')
  })
})
describe('The isosceles triangle', () => {
  it('has three sides', () => {
    const shape = shapeMother.redIsoscelesTriangle().build()
    expect(shape.sides).toBe(3)
  })
  it('has two sides of equal length', () => {
    const shape = shapeMother.redIsoscelesTriangle().build()
    expect(shape.sideLengths.reduce<number[]>((a, c) => (a.includes(c) ? a : [...a, c]), [])).toHaveLength(2)
  })
  it('is named correctly', () => {
    const shape = shapeMother.redIsoscelesTriangle().build()
    expect(shape.name).toBe('Isosceles triangle')
  })
  it('is coloured red', () => {
    const shape = shapeMother.redIsoscelesTriangle().build()
    expect(shape.colour).toBe('Red')
  })
})
