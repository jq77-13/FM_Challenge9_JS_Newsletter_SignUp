const submitButton = document.getElementById('submitbtn');
const dismissButton = document.getElementById('dismissbtn');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

document.getElementById('email').addEventListener('input', function() {
  setDefaultStyles();
});

document.getElementById('submitbtn').addEventListener('click', function() {
  if (!validateEmail(emailInput.value)) {
    setErrorStyles();
    return; // Stop further execution if email is invalid
  } else {
    setDefaultStyles();
    switchLayout(false);
    document.getElementById('display-email').innerText = emailInput.value;
  }
});

document.getElementById('dismissbtn').addEventListener('click', function() {
  emailInput.value = ''; // Clear the input field
  switchLayout(true);
});

function switchLayout(boolean) {
  if (boolean) {
    document.querySelector('.container').style.display = 'flex';
    document.querySelector('.success-message').style.display = 'none';

  } else {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.success-message').style.display = 'flex';
  }
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function setDefaultStyles() {
  emailError.style.display = '';
  emailInput.style.color = 'var(--Blue800)';
  emailInput.style.border = '1px solid var(--Grey)';
  emailInput.classList.remove('input-error');
}

function setErrorStyles() {
  emailError.style.display = 'block';
  emailInput.style.color = 'var(--Red)';
  emailInput.style.border = '1px solid var(--Red)';
  emailInput.classList.add('input-error');
}