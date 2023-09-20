/* Evenement au click sur l'image*/

let lightBox = document.querySelector("#gallery .card img");
console.log(lightBox);
document.querySelectorAll("#gallery .card").forEach(picture => {
    picture.addEventListener("click",(e) => {
    console.log(e.currentTarget.dataset.id);
    lightBox.show(e.currentTarget.dataset.id);
        
    })
})