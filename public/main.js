const inputBox = document.getElementById('inputBox')
const listContainer = document.getElementById('list-container')

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
listContainer.addEventListener('dblclick', function(e){
    if(e.target.tagName === "LI"){
        listContainer.removeChild(e.target)
    }
    saveData()
})
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTasks() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTasks();