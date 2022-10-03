import whichCard from '../whichCard';

test.each([
  ['visa for valid user card', '4222222222222', '.card-visa'],
  ['master for valid user card ', '5555555555554444', '.card-master'],
  ['american for valid user card ', '371449635398431', '.card-american'],
  ['mir for valid user card ', '2200770212727079', '.card-mir'],
  ['null for invalid user card', '1222222222222', null],

])(('it should be %s'), (_, value, expected) => {
  expect(whichCard(value)).toBe(expected);
});