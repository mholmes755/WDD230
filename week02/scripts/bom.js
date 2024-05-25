
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () =>{
if (input.value != ''){

    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButtn = document.createElement('button');

    
    listItem.appendChild(listText);
    listText.textContent = myItem;  
    listItem.appendChild(listButtn);
    listButtn.textContent = "Delete";
    list.appendChild(listItem);

    listButtn.addEventListener('click', () =>{
        list.removeChild(listItem);
    });
    input.focus();
}
});

