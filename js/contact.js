document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const phoneInput = document.querySelector('input[name="phno"]');
  const whatsappInput = document.querySelector('input[name="whatsappno"]');

  // Restrict typing to valid Indian phone format (start 6-9, 10 digits)
  function restrictPhoneInput(inputElement) {
    inputElement.addEventListener('input', () => {
      // Remove non-digit characters
      inputElement.value = inputElement.value.replace(/[^0-9]/g, '');

      // Ensure first digit is 6–9
      if (inputElement.value.length === 1 && !/[6-9]/.test(inputElement.value)) {
        inputElement.value = '';
      }

      // Limit to 10 digits
      if (inputElement.value.length > 10) {
        inputElement.value = inputElement.value.slice(0, 10);
      }
    });
  }

  restrictPhoneInput(phoneInput);
  restrictPhoneInput(whatsappInput);

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission

    // Gather form data
    const formData = new FormData(form);

    const name = formData.get('name');
    const city = formData.get('city');
    const email = formData.get('email');
    const phone = formData.get('phno');
    const wtno = formData.get("whatsappno");
    const destination = formData.get("destinations");
    const vacation = formData.get('vecationtype');

    // Required fields check
    if (!name || !city || !email || !phone || !wtno || !destination || !vacation) {
      window.alert('Please fill in all required fields!');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      window.alert('Please enter a valid email address.');
      return;
    }

    // Phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      window.alert('Please enter a valid phone number (10 digits, starts with 6–9).');
      return;
    }

    // WhatsApp number validation
    if (!phoneRegex.test(wtno)) {
      window.alert('Please enter a valid WhatsApp number (10 digits, starts with 6–9).');
      return;
    }

    // Success message
    alert(`Thank you, ${name}! Your inquiry has been received.`);

    form.reset();
  });
});
