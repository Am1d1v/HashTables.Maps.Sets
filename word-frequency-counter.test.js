const wordFrequencyCounter = require('./word-frequency-counter');

describe('wordFrequencyCounter', () => {
  
  test('String', () => {

    const inputData = 'heLlo World worLd';

    const expectedOutput = new Map([
        ['hello', 1],
        ['world', 2]
    ]);

    const result = wordFrequencyCounter(inputData);
    expect(result).toStrictEqual (expectedOutput);

  });
 
});
