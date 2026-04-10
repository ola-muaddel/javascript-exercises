const values = require('./joinStrings')

describe('step 2', () => {
  test.skip('firstName is Ola', () => {
    expect(values.firstName).toEqual('Ola');
  });
  test.skip('lastName is Muaddel', () => {
    expect(values.lastName).toEqual('Muaddel');
  });
  test.skip('thisYear is 2026', () => {
    expect(values.thisYear).toEqual(2026);
  });
  test.skip('birthYear is 2005', () => {
    expect(values.birthYear).toEqual(2005);
  });
  test.skip('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Ola Muaddel and I am 21 years old.');
  });
});

describe('step 3', () => {
  test.skip('fullName is Ola Muaddel', () => {
    expect(values.fullName).toEqual('Ola Muaddel');
  });
  test('age is 21', () => {
    expect(values.age).toEqual(21);
  });
});
