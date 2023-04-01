import { getMonth } from '../index.js';

describe('tests for function getMonth', () => {

  it('should execute correctly with the valid data', () => {
    expect(getMonth(3)).toBe('Март');
  });
  it('should execute correctly with the invalid data (number)', () => {
    expect(getMonth(13)).toBe('Данные неверны');
  });
  it('should execute correctly with the invalid data (string)', () => {
    expect(getMonth('Апрель')).toBe('Данные неверны');
  });
  
});