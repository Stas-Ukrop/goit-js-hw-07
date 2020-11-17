let parent=document.getElementById('categories');
let h2=parent.querySelectorAll('h2');
let ul=parent.querySelectorAll('ul');



console.log(`В списке ${parent.getElementsByClassName('item').length} категории.`);
h2.forEach((elem,index) => {
    console.log(`Категория: ${elem.innerText} 
// Количество элементов: ${ul[index].querySelectorAll('li').length}`);
});