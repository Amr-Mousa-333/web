let countwin = 0 ;
let countlose = 0;
let counttie = 0  ;
function play(userMove) {
  const rnd = Math.random();
  let compMove = '';

  if (rnd <= 1 / 3) compMove = 'rock';
  else if (rnd <= 2 / 3) compMove = 'paper';
  else compMove = 'scissors';

  let result = '';
  if (userMove === compMove){ result = 'tie';  counttie++;}
  else if (
    (userMove === 'rock' && compMove === 'scissors') ||
    (userMove === 'paper' && compMove === 'rock') ||
    (userMove === 'scissors' && compMove === 'paper')
  ) {result = 'win'; countwin++ ; }
  else {result = 'lose'; countlose++}
  // تحديث النص داخل العنصر اللي ID بتاعه resultDisplay
  const resultElement = document.getElementById("resultDisplay");
  if (resultElement) {
    resultElement.innerHTML = `You chose ${userMove} — Computer chose ${compMove} → <strong>${result}</strong>`;
    resultElement.style.fontSize = "30px";
    const resultElementt = document.getElementById("resultDisplayy");
      resultElementt.innerHTML = `wins${countwin} : lose${countlose} , ties${counttie}`;
      resultElementt.style.fontSize = "30px";
  }
}
