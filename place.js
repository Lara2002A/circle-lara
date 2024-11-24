console.log("file is working!")

let bgbutton = document.getElementById("button");
console.log(bgbutton)
bgbutton.addEventListener("click", function(event){
    console.log("clicked!")
    document.body.classList.toggle("active");
})

/* console.log("file is working!")

let button = document.getElementById("click");
console.log(button)
button.addEventListener("click", function(event){
    console.log("clicked!")
    document.body.classList.toggle("on");
}) */