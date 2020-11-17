let input=document.getElementById('name-input');
let span=document.getElementById('name-output');

input.addEventListener('input',()=>{
    let name=input.value.trim();
(name.length>0)?span.textContent=name:span.textContent='Незнакомец';
});