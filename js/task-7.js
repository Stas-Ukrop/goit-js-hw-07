let fontSizeControl=document.getElementById('font-size-control');

fontSizeControl.addEventListener('input',()=>{
    document.getElementById('text').style.fontSize=`${fontSizeControl.value}px`;    
});