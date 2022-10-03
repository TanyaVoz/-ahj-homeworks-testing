import getValidCreditCard from '../validate';

test.each([
  ['true for valid user card', '378282246310005', true],
  ['true for valid user card', '6011000990139424', true],
  ['false for invalid user card ', '77159tsh64999', false],
  ['false for invalid user card ', '42', false],
  ['false for invalid user card ', 'ewtjIOJPKOE[pwql', false],
  ['false for invalid user card ', '42000039928299191tu0010292ar9010wrwr', false],
  ['false for invalid user card ', '0000000000000000', false],

])(('it should be %s'), (_, value, expected) => {
  expect(getValidCreditCard(value)).toBe(expected);
});