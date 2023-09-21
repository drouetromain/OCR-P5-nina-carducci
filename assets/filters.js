let loadgalery = () =>{
    let lightBoxInstance = new lightBox(document.querySelectorAll("#gallery img.active"));
    document.querySelectorAll("#gallery img.active").forEach(picture => {
        picture.addEventListener("click",(e) => {
            lightBoxInstance.show(e.currentTarget.dataset.id);
        })
    })
}

window.onload = () => {
    let filters = document.querySelectorAll("#filters button")
    for(let filter of filters){
        filter.addEventListener("click", function(){
            /* Suppression de toutes les classes actives du filtre */
            const elements = document.querySelectorAll('.filter.active'); 
            elements.forEach((element) => { element.classList.remove('active'); });
            /* Dans this.classList, ajouter la class active */
            this.classList.add("active");
            let tag = this.id;
            let images = document.querySelectorAll("#gallery img");
            for(let image of images){
                image.classList.replace("active", "inactive");
                if(tag in image.dataset || tag === "all"){
                    image.classList.replace("inactive", "active");
                }
            }
            loadgalery();
        });
    }
    loadgalery();
}
