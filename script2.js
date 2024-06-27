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
    const doneBtn = document.createElement("button");
    
    doneBtn.innerHTML = "Done"

    listItem.innerHTML = `${itemText} <i class="fa-solid fa-xmark"></i>`;
    
    listItem.addEventListener('click',()=>{
        // listItem.classList.toggle("Done")
        doneBtn.innerText = "✅"
        // doneBtn.style.color = "white"
        // doneBtn.style.backgroundColor = "blue"
        doneBtn.style.border = 'none'
    })
    listItem.querySelector("i").addEventListener('click', ()=>{
        listItem.remove();
    })
    ul.append(listItem)
    // div.append(iBtn,doneBtn)
    listItem.append(doneBtn)

}