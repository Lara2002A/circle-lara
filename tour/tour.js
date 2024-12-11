console.log("file is working!")

let button = document.getElementById("button");
console.log(button)
button.addEventListener("click", function(event){
    console.log("clicked!")
    document.body.classList.toggle("active");
})

