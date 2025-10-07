const submitButton = document.getElementById('submitbtn');
const dismissButton = document.getElementById('dismissbtn');

document.getElementById('submitbtn').addEventListener('click', function() {
  SwitchLayout(false);
});
document.getElementById('dismissbtn').addEventListener('click', function() {
  SwitchLayout(true);
});

function SwitchLayout(boolean) {
  if (boolean) {
    document.querySelector('.container').style.display = 'flex';
    document.querySelector('.success-message').style.display = 'none';

  } else {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.success-message').style.display = 'flex';
  }
}
