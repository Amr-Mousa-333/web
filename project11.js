/*const product ={
  name :'socks' ,
  price : 10,

};
console.log(product.price);
product.name= 'amor';
console.log(product.name);
product.newitem = true ;
console.log(product) ;
delete product.newitem ;
console.log(product) ;
console.log(typeof product) ;*/
/*
const product2 ={
  name :'ti-shert',
  ['new'] :'new',
  rate : {
    amr:4 ,
  },
  fun : function fun1() {
    console.log('amr')
  }
};
console.log(product2) ;
console.log(JSON.stringify(product2));
const strr = JSON.stringify(product2);
console.log(JSON.parse(strr));*/


// let product1 ={
//   name : 'basketball' ,
//   price :2095,
//   ['devey time'] :'3days',
// };
// let product2 ={
//   name : 'football' ,
//   price :5095,
//   ['devey time'] :'3days',
// };
// let product3 ={
//   name : 'football' ,
//   price :5095,
//   ['devey time'] :'3days',
// };
// let x = function(product1 , product2){
// let res = (product1.price == product2.price &&product1.name == product2.name) ?  'true' : 'false' ; return res ;
// }
// let res = x(product3 , product2) ;
// console.log(res) ;
// console.log('AMOR'.repeat(4))
// console.log(product)

// product.price =2095 + 500 ;

// console.log(product)

let item1 = document.getElementById('item1') ;
let item2 = document.getElementById('item2') ;
let guess  ;
// if(onclick() ==item1.onclick())
item1.onclick = function()
{
  playgame('head') ;

}
item2.onclick = function() {
  playgame('tails');
};
let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0 ,losess :0
};
function playgame(guess){
  let res = Math.random() <.5 ? 'head' : 'tails' ;
  guess == res? console.log(`u guess is: ${guess} and the res is ${res}`)  :console.log(`u guess is: ${guess} and the res is ${res}`);
    localStorage.setItem('score', JSON.stringify(score));
  guess == res? console.log(`u win ${++score.wins}`) : console.log(`u lose ${++score.losess}`);
  // localStorage.setItem('score', JSON.stringify(score));
  localStorage.setItem('score', JSON.stringify(score));
}


















































