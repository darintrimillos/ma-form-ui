import isDisabled from './isDisabled';

describe('isDisabled test', () => {
  it('returns false when isChecked is true', () => {
    const shouldDisable = isDisabled(true);
    expect(shouldDisable).toBe(false);
  })

  it('returns false when matching category', () => {
    const shouldDisable = isDisabled(false, 100, [100]);
    expect(shouldDisable).toBe(true);
  })

  it('returns true with a date overlap', () => {
    const shouldDisable = isDisabled(false, 200, [100], ['2020-01-01', '2020-02-01'], [['2020-01-15', '2020-02-16']]);
    expect(shouldDisable).toBe(true);
  });

  it('returns false without a date overlap', () => {
    const shouldDisable = isDisabled(false, 200, [100], ['2020-01-01', '2020-02-01'], [['2020-03-15', '2020-04-16']]);
    expect(shouldDisable).toBe(false);
  })
})