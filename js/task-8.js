let render=document.getElementById('controls').childNodes[3];
let destroy=document.getElementById('controls').childNodes[5];
let boxes=document.getElementById('boxes');

render.addEventListener('click',createBoxes);
function createBoxes(){
    let numb=Number(document.getElementById('controls').childNodes[1].value);
    let totalDiv=boxes.querySelectorAll('div').length;
    createDiv(boxes,numb,totalDiv);
};

destroy.addEventListener('click',destroyBoxes);
function destroyBoxes(){    
    boxes.innerHTML='';
};

function createDiv(id,numb,b=0,arr){    
    let str='';
    for(let i=1;i<numb+1;i+=1){
        str+=`<div style="width:${(i+b)*10}px; height:${(i+b)*10}px;border:1px solid black; background-color:#${( Math.random() * 0xFFFFF0 << 0 ).toString(16)}"></div>`;
    }
    boxes.insertAdjacentHTML('beforeend',str);
}