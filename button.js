console.log("file is working!")

let bgbutton = document.getElementById("button");
console.log(bgbutton)
bgbutton.addEventListener("click", function(event){
    console.log("clicked!")
    document.body.classList.toggle("active");
})