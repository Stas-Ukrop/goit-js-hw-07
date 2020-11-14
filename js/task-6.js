let validationInput=document.getElementById("validation-input");

validationInput.addEventListener('blur',()=>{
    if(Number(validationInput.value.length)!=Number(validationInput.dataset.length)){
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }else{        
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    }
});