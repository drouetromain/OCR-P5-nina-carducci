let loadgalery = () =>{
    let lightBoxInstance = new lightBox(document.querySelectorAll("#gallery img.active"));
    document.querySelectorAll("#gallery img.active").forEach(picture => {
        picture.addEventListener("click",(e) => {
            lightBoxInstance.show(e.currentTarget.dataset.id);
        })
    })
}

window.onload = () => {
    let filters = document.querySelectorAll("#filters div")
    for(let filter of filters){
        filter.addEventListener("click", function(){
            let tag = this.id;
            let images = document.querySelectorAll("#gallery img");
            for(let image of images){
                image.classList.replace("active", "inactive");
                if(tag in image.dataset || tag === "all"){
                    image.classList.replace("inactive", "active")
                }
            }
            loadgalery();
        });
    }
    /* Evenement au click sur l'image*/
    //console.log(lightBox);
    loadgalery();
}
