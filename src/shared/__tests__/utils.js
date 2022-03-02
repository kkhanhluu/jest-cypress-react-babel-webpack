import {getFormattedValue} from '../utils'

test('Tests format value', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0')
})
