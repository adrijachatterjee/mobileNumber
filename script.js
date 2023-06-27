// Get the input field
const phoneInput = document.getElementById('phone');

// Add an event listener for input events
phoneInput.addEventListener('input', formatPhoneNumber);

function formatPhoneNumber() {
    // Remove all non-digit characters from the input value
    let digitsOnly = phoneInput.value.replace(/\D/g, '');

    // Apply formatting to the digitsOnly string
    let formattedNumber = '';

    if (digitsOnly.length > 3) {
        formattedNumber += '(' + digitsOnly.substring(0, 3) + ')' + ' ' + digitsOnly.substring(3, 6);

        if (digitsOnly.length > 6) {
            formattedNumber += '-' + digitsOnly.substring(6, 10);
        }
    }
    else
        formattedNumber = digitsOnly.substring(0, 3);

    // Update the input field value with the formatted number
    phoneInput.value = formattedNumber;
}