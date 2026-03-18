const inputBox = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
addBtn.addEventListener("click", () => {
  if (inputBox.value == "") {
    alert("Please enter a value");
    return;
  }

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "Delete";
  delBtn.classList.add("delete");
  li.innerText = inputBox.value;
  li.appendChild(delBtn);
  list.appendChild(li);
  delBtn.addEventListener("click", () => {
    list.removeChild(li);
  });
  li.addEventListener("dblclick", () => {
    const current = li.childNodes[0].textContent;
    const edit = document.createElement("input");
    edit.value = current;
    li.replaceChild(edit, li.childNodes[0]); //new, old
    edit.focus();
    edit.addEventListener("blur", () => {
      const backTolist = document.createTextNode(edit.value);
      li.replaceChild(backTolist, edit); //new, old
    });
  });
  inputBox.value = "";
});
