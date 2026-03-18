const btn= document.getElementById("toggleButton")
btn.addEventListener("click", ()=>{
   const isDark= document.body.classList.toggle("dark")
    if(isDark)
    {
        btn.innerText="Toggle to Light Mode"
    }
    else{
        btn.innerText="Toggle to Dark Mode"
    }
})
