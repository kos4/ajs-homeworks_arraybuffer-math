import Magician from '../classes/Magician';

test('Magician attack without debuff', () => {
  const magician = new Magician(100);
  magician.attack = 2;
  expect(magician.attack).toBe(90);
});

test('Magician zero attack without debuff', () => {
  const magician = new Magician(100);
  magician.attack = 12;
  expect(magician.attack).toBe(0);
});

test('Magician attack with debuff', () => {
  const magician = new Magician(100);
  magician.stoned = 2;
  expect(magician.stoned).toBe(85);
});

test('Magician zero attack with debuff', () => {
  const magician = new Magician(100);
  magician.stoned = 10;
  expect(magician.stoned).toBe(0);
});
