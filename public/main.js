const inputBox = document.getElementById('inputBox')
const listContainer = document.getElementById('list-container')


//task adding function

function addTask(){
    if(inputBox.value === ""){
        alert('Add some task first.')
    }else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
    }
    inputBox.value = ''
    saveData()
}

//task checked and unchecked function

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        if(e.target.style.textDecoration === ""){
            e.target.style.textDecoration = "line-through"
        }else{
            e.target.style.textDecoration = ""
        }
        saveData()
    }
})

//task delete function

listContainer.addEventListener('dblclick', function(e){
    if(e.target.tagName === "LI"){
        listContainer.removeChild(e.target)
    }
    saveData()
})

//task save in local storage

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

//get tasks from local storage and shows

function showTasks() {
    listContainer.innerHTML = localStorage.getItem('data')
}

//call show task function

showTasks();