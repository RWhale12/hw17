const input = document.querySelector('input');
const button = document.querySelector('button');
const p = document.querySelector('p');

function* generateSequence(n){
    let fac = 1;
    for (let i = 1; i < n; i++) {
      fac = fac * (i + 1);  
    }
      yield fac;
  }
  
  button.addEventListener('click', () =>{
  let generator = generateSequence(input.value);
  p.innerText = input.value + '! = ' +(generator.next().value);
  input.value = Number(input.value) + 1;
});