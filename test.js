let amorCalc = localStorage.getItem('calculation') || '';
showAmor();

function clc(val) {
  amorCalc += val;
  showAmor();
  localStorage.setItem('calculation', amorCalc);
}

function showAmor() {
  document.querySelector('.js-calculation').innerHTML = amorCalc;
}
