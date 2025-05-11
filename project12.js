// document.body.innerHTML+='<h1>amor</h1>';
document.title='amor';
// document.querySelector('#amor').innerHTML ='mousa' ;
// console.log(document.querySelector('#amor')) ;
// console.log(document.querySelector('.amor')) ;



subscribbtn = function() {
  let subscribbtn = document.querySelector('#subscrib-btn') ;
  if(subscribbtn.innerHTML=='subscribe'){
    subscribbtn.innerHTML='subscriped';
  }
  else{
    subscribbtn.innerHTML='subscribe';
  }
}

function calculat() {
  let costInput = document.querySelector('#cost');
  let res = document.querySelector('#res');
  let cost = Number(costInput.value);

  if (cost >= 40) {
    res.innerHTML = `Shipping is FREE. Total = $${cost}`;
  } else {
    res.innerHTML = `Shipping is $10. Total = $${cost + 10}`;
  }
}

// subscribbtn()











