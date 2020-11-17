let decrement=document.querySelector('button[data-action="decrement"]');
let increment=document.querySelector('button[data-action="increment"]');

decrement.addEventListener('click',()=>{
    let span=document.getElementById('value');
    span.innerHTML=Number(span.innerHTML)-1;
});
increment.addEventListener('click',()=>{
    let span=document.getElementById('value');
    span.innerHTML=Number(span.innerHTML)+1;
});