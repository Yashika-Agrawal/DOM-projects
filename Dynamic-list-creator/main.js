const inputBox = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const ul = document.getElementById("list"); //<ul></ul> -- unordered list
addBtn.addEventListener("click", () => { 
  if (inputBox.value == "") {
    alert("Please enter a value");
    return;
  }
  const li = document.createElement("li"); //create a <li> element to insert in <ul>
  const delBtn = document.createElement("button"); 
  delBtn.innerHTML = "Delete";
  delBtn.classList.add("delete"); //add delete class to delete btn
  li.innerText = inputBox.value; //<li> will have user input value
  li.appendChild(delBtn); //Adding delete btn to <li>
  ul.appendChild(li); //adds new <li> to <ul>
  delBtn.addEventListener("click", () => {
    ul.removeChild(li);
  });
  li.addEventListener("dblclick", () => {
    console.log(li, "li") //<li> "text" <button>Delete</button/> </li>
    console.log(li.childNodes) //NodeList(2) [text, button.delete]
    const currentText = li.childNodes[0].textContent; //Access text of text node
    const editInput = document.createElement("input"); //create input to edit
    editInput.value = currentText; //Set edit input value to current list textContent
    li.replaceChild(editInput, li.childNodes[0]); //replace textNode of list to input
    editInput.focus();
    editInput.addEventListener("blur", () => { //Clicking outside should save edited changes
      const backToText = document.createTextNode(editInput.value); 
      li.replaceChild(backToText, editInput); //replace edited input to textNode
    });
  });
  inputBox.value = "";
});
