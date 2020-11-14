let input=document.getElementById('name-input');
let span=document.getElementById('name-output');
input.addEventListener('input',()=>{
if(input.value.length>0){
    span.textContent=input.value;
}else{
    span.textContent='Незнакомец';
}
})