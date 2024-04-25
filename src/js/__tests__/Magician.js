import Magician from '../classes/Magician';

test('Magician attack without debuff', () => {
  const magician = new Magician(2);
  magician.attack = 100;
  expect(magician.attack).toBe(90);
});

test('Magician zero attack without debuff', () => {
  const magician = new Magician(12);
  magician.attack = 100;
  expect(magician.attack).toBe(0);
});

test('Magician attack with debuff', () => {
  const magician = new Magician(2);
  magician.attack = 100;
  magician.stoned = true;
  expect(magician.attack).toBe(85);
});

test('Magician zero attack with debuff', () => {
  const magician = new Magician(10);
  magician.attack = 100;
  magician.stoned = true;
  expect(magician.attack).toBe(0);
});
