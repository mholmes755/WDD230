const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChaptersList() || [];


button.addEventListener('click', () =>{
    if(input.value !=''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChaptersList();
        input.value='';
        input.focus();
    }
});


function displayList(item) {
    let listItem = document.createElement('li');
    let deleteBtn = document.createElement('button');

    listItem.textContent = item;   
    deleteBtn.textContent = 'Delete Item';
    listItem.append(deleteBtn);
    list.append(listItem);

// What the "Delete Item" button will do
    deleteBtn.addEventListener('click',() =>{
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    }) 
};

// Local Storage Functions
function setChaptersList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function getChaptersList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};


// Remove Chapter from Local Storage
function deleteChapter(chapter) {
    chapter= chapter.slice(0, chapter.length - 11);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    // getChaptersList();
    setChaptersList();  
};


chaptersArray.forEach(chapter => {
    displayList(chapter);
    
})
