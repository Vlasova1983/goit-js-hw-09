import Notiflix from 'notiflix';

const formEl={
  form: document.querySelector('.form'),
  delay: document.querySelector('[name ="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}

formEl.form.addEventListener("submit",onAmountValue);

function onAmountValue(event){
  event.preventDefault(); 
  const amount = Number(formEl.amount.value);
  const delay = Number(formEl.delay.value);
  const step = Number(formEl.step.value);  
  let sec = delay;

  for(let i=1; i<amount+1; i+=1){      
    createPromise(i,sec)
    .then(({ position, delay }) => {
      Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {        
      Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
    }) 
    sec = sec + step;  
  }
}

function createPromise(position, delay) {  
  return new Promise((resolve, reject) => {  
    setTimeout(() => {      
      if (Math.random() > 0.3) {                 
        resolve ({position,delay});        
      } else {        
        reject({position,delay});
      }
    }, delay);  
  }); 
} 


  




  