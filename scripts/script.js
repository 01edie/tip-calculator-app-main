'use strict';
// elements
const billEl = document.querySelector('.bill-input');
const customTipEl= document.querySelector('.tip-input');
const numOfPeopleEl = document.querySelector('.number-of-people-input');
const resetBtn = document.querySelector('.reset-btn');

// functions 
const isNumeric = function(number){
  return !isNaN(number) && isFinite(number);
};

const tipCalc = (billValue, tipValue, peopleCount)=>{
  let totalTip = ((billValue * tipValue)/100).toFixed(2);
  let tipPerPerson = (totalTip/peopleCount).toFixed(2);
  let billPerPerson = ((Number(billValue)+Number(totalTip))/peopleCount).toFixed(2);
  document.querySelector('.tip-amount-value').innerHTML = `$${tipPerPerson}`;
  document.querySelector('.total-amount-value').textContent = `$${billPerPerson}`;
}

// onInput bill
const billInput = () =>{
  if(billEl.value <= 0){
    document.querySelector('.bill-error-message').style.visibility='visible';
  }
  else{
    document.querySelector('.bill-error-message').style.visibility='hidden';
  }
}
//onInput tip
let selectedTip;
const tipInput = (e) =>{
  let activeTipNode = document.querySelectorAll('.tip-active');
  // console.log(activeTipNode);
  if( activeTipNode[0] !== undefined){
    activeTipNode[0].classList.remove('tip-active');
  }
  // console.log(e.target.classList);
  e.target.classList.add('tip-active');
  
  selectedTip = Number(e.target.value);
  if(selectedTip<=0){
    document.querySelector('.tip-error-message').style.visibility='visible';
  }else{
    document.querySelector('.tip-error-message').style.visibility='hidden';
  }
}

//onInput number of people
const peopleInput = () =>{
  if(numOfPeopleEl.value <= 0){
    document.querySelector('.people-error-message').style.visibility='visible';
  }
  else{
    document.querySelector('.people-error-message').style.visibility='hidden';
    tipCalc(Number(billEl.value), selectedTip, Number(numOfPeopleEl.value));
  }
}

//reset
const reset = () => {
  document.querySelector('.tip-amount-value').innerHTML = `$${0.00}`;
  document.querySelector('.total-amount-value').textContent = `$${0.00}`;

  billEl.value=0;
  numOfPeopleEl.value=0;

  let activeTipNode = document.querySelectorAll('.tip-active');
  // console.log(activeTipNode);
  if( activeTipNode[0] !== undefined){
    activeTipNode[0].classList.remove('tip-active');
  }
  document.querySelector('.tip-input').value=null;
}

resetBtn.addEventListener('click',reset);