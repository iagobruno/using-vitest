import { group } from '../src/group'

describe('the group function', () => {
  test('should correctly map the array', () => {
    const input = [1, 2, 3, 4, 5]
    const mock = vi.fn().mockImplementation((item) => item % 2 === 0 ? 'odd' : 'even')
    const output = group(input, mock)

    expect(output).toMatchObject({
      'even': [1, 3, 5],
      'odd': [2, 4]
    })
    expect(Object.keys(output)).toEqual(['even', 'odd'])
    expect(output.odd.every(item => item % 2 === 0)).toBe(true)
    expect(output.even.some(item => item % 2 === 0)).not.toBe(true)
    expect(mock).toHaveBeenCalledTimes(input.length)
  })
})
