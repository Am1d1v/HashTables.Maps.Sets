const phoneNumberDirectory = require('./phone-number-directory');

describe('Building a phone number directory from an array of phone numbers', () => {
  
    const phoneNumbers = [
        'John:123-456-7890',
        'Jane:987-654-3210',
        'Joe:555-555-5555',
      ];

    const result = phoneNumberDirectory(phoneNumbers);

    test('It should return Joes phone number', () => {
        expect(result.get('Joe')).toBe('555-555-5555');
    })  

});
