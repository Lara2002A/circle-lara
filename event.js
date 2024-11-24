x = 0
function clickInstructions(el) {
    let title = document.getElementById("title");
    let subtitle = document.getElementById("subtitle")

    if(el == title) {
        console.log("title")
        let p = document.createElement("p");
        let firstText = document.createTextNode("The internet is made up of cables.");
        let secondText = document.createTextNode("The internet is made up of light signals.");
        p.appendChild(firstText);
        p.appendChild(secondText)
        document.body.appendChild(p);
    
        } else if ((el == subtitle) < 5) {
        console.log("subtitle clicked")
        let p = document.createElement("p");
        let firstText = document.createTextNode("The internet is made up of cables.");
        let secondText = document.createTextNode("The internet is made up of light signals.");
        p.appendChild(firstText);
        p.appendChild(secondText)
        document.body.appendChild(p);

         


        x += 1
        console.log(x)

        if (x > 5) {
            let p = document.createElement("p");
            let firstText = document.createTextNode("STOP CLICKING");
            p.appendChild(firstText);
            document.body.appendChild(p);

        }


    }
}

document.addEventListener("click", function(event) {
    clickInstructions(event.target)
});



let places = ["help", "me", "please"];

let listOfPlaces = "";
for (let i = 0; i < places.length; i++) {
    listOfPlaces += places[i] + " ";
}
let list = document.createElement("p");
list.innerHTML = listOfPlaces;
document.body.appendChild(list);
