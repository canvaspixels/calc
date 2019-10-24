import evaluate from './evaluate.js'
describe('evaluate', () => {
  let expression
  it('evaluates expressions', () => {
    expression = '1+2+3+4-5*4'
    expect(evaluate(expression)).toBe(-10)

    expression = '0+1+2+3+4'
    expect(evaluate(expression)).toBe(10)

    expression = '0-9'
    expect(evaluate(expression)).toBe(-9)
  })

  it('evaluates expressions with floats', () => {
    expression = '0.5+2.3'
    expect(evaluate(expression)).toBe(2.8)
  })

  it('evaluates expressions starting with a "-" operator', () => {
    expression = '-30'
    expect(evaluate(expression)).toBe(-30)
  })

  it('evaluates longer expressions starting with a "-" operator', () => {
    expression = '-30-6'
    expect(evaluate(expression)).toBe(-36)

    expression = '-0.5+5.3'
    expect(evaluate(expression)).toBe(4.8)
  })

  it('throws an error for expressions starting with any other operator apart from "-"', () => {
    expression = '*30-6'
    expect(evaluate(expression)).toThrow()

    expression = '*3'
    expect(evaluate(expression)).toThrow()

    expression = '+4-6'
    expect(evaluate(expression)).toThrow()

    expression = '/4-6'
    expect(evaluate(expression)).toThrow()
  })

  it('ignores a trailing "-" operator', () => {
    expression = '2+3+4-4*3-'
    expect(evaluate(expression)).toBe(-3)
  })

  it('ignores every expression after it encounters consecutive operators', () => {
    expression = '2+3++4-/4*3+78-'
    expect(evaluate(expression)).toBe(5)
  })
})
