const inputText = document.querySelector('#inputBox')
const button = document.querySelector('#button-addo2')
const ul = document.querySelector('#ul')

button.addEventListener('click', (event) =>{
    console.log(event)
    if(event.target.innerHTML == 'Add'){
        addtodo(inputText.value);
        inputText.value = ' '
    }

})

const addtodo = (itemText)=>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `${itemText} <i" class="fa-solid fa-xmark"></i>`;
    
    listItem.addEventListener('click',()=>{
        listItem.classList.toggle("done")
    })
    listItem.querySelector("i").addEventListener('click', ()=>{
        listItem.remove();
    })
    ul.appendChild(listItem)
}