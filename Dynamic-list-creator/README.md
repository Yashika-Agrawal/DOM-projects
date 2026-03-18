# 📝 Dynamic List Creator

A simple and interactive project built using vanilla JavaScript to practice **DOM manipulation**.

## 🚀 Features

* Add items dynamically to a list
* Delete individual items
* Instant UI updates without page reload

## 🧠 What I Learned

* Difference between `removeChild()` and `remove()`
* `removeChild()` throws an error if the element is already removed
* `remove()` is safe and does nothing if the element is not in the DOM
* Under the hood:

  ```js
  li.remove() ≈ li.parentElement.removeChild(li)
  ```
* Creating and appending elements using:

  * `document.createElement()`
  * `appendChild()`
* Handling user input using `.value`
* Event handling with `addEventListener()`

## 🛠️ Tech Used

* HTML
* CSS
* JavaScript (DOM Manipulation)

## 📂 How to Run

1. Clone the repository
2. Open the project folder
3. Run `index.html` in your browser

## 💡 Future Improvements

* Add edit functionality ✏️
* Save list using `localStorage` 💾
* Add animations for better UX 🎨

---

Built while learning and exploring how the DOM works ⚡
