const inputBox = document.getElementById("itemInput")
const addBtn = document.getElementById("addBtn")
const list = document.getElementById("list")
addBtn.addEventListener("click", ()=>{
    if(inputBox.value=="")
    {
        alert("Please enter a value")
        return;
    }

    console.log(inputBox.value)
    const li=document.createElement("li")
    const delBtn=document.createElement("button")
    delBtn.textContent="Delete"
    delBtn.classList.add("delete")
    li.innerText=inputBox.value
    li.appendChild(delBtn)
    list.appendChild(li)
    delBtn.addEventListener("click", ()=>{
        list.removeChild(li)
    })
    inputBox.value=""


})

