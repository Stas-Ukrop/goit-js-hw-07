const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ing=document.getElementById('ingredients');
  
  //первый способ
let addLi=ingredients.map(el=>{
    ing.insertAdjacentHTML('afterbegin',`<li>${el}</li>`);
});
//второй способ
ing.innerHTML=ingredients.map(el=>{    
    return `<li>${el}</li>`;
}).join('');
//третий способ
ing.innerHTML=ingredients.reduce((sum,elem)=>{
    return sum+`<li>${elem}</li>`;
},'');