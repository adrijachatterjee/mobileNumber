// Import the assert module from Chai
const assert = require('chai').assert;

// Import the JavaScript code to be tested
const { formatPhoneNumber } = require('./script');

// Describe the tests using Mocha
describe('formatPhoneNumber', function() {
  // Test case 1: Input with 6 digits
  it('should format the phone number correctly with 6 digits', function() {
    const input = '123456';
    const expectedOutput = '(123) 456';

    // Call the function to be tested
    formatPhoneNumber(input);

    // Check the updated value of the input field
    assert.equal(phoneInput.value, expectedOutput);
  });

  // Test case 2: Input with 10 digits
  it('should format the phone number correctly with 10 digits', function() {
    const input = '1234567890';
    const expectedOutput = '(123) 456-7890';

    // Call the function to be tested
    formatPhoneNumber(input);

    // Check the updated value of the input field
    assert.equal(phoneInput.value, expectedOutput);
  });

  // Test case 3: Input with 11 digits
  it('should format the phone number correctly with 11 digits', function() {
    const input = '12345678901';
    const expectedOutput = '(123) 456-7890';

    // Call the function to be tested
    formatPhoneNumber(input);

    // Check the updated value of the input field
    assert.equal(phoneInput.value, expectedOutput);
  });
});
