const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


  let addLi=function(arr,id){
      for(let i=0;i<arr.length;i+=1){
          let newLi=document.createElement('li');
          newLi.textContent=arr[i];
          id.append(newLi);
      }
  }

const ing=document.getElementById('ingredients');

console.log(addLi(ingredients,ing));