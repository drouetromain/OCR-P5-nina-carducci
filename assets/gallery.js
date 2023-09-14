class lightBox{
    constructor(listElement){
        this.currentElement = null;
        this.listElement = Object.values(listElement);
        this.manageEvent();

    }

    show(id){
        this.currentElement = this.getElementById(id);
        this.display();
    }

    next(){
        let index = this.listElement.findIndex(element => element.dataset.id == this.currentElement.dataset.id);
        if(index == this.listElement.length -1){
            this.currentElement= this.listElement[0];
        }else{
            this.currentElement = this.listElement[index + 1];
        }
        this.display();

    }

    previous(){
        let index = this.listElement.findIndex(element => element.dataset.id == this.currentElement.dataset.id);
        if(index == 0){
            this.currentElement= this.listElement[this.listElement.length - 1];
        }else{
            this.currentElement = this.listElement[index - 1];
        }
        this.display();

    }

    manageEvent(){
        document.querySelector("#lightbox .next").addEventListener("click", () => {
        this.next();
        });
        document.querySelector("#lightbox .previous").addEventListener("click", () => {
            this.previous();
        });
        document.querySelector("#lightbox .close").addEventListener("click", () => {
            this.close();
        });
        document.querySelector("#lightbox").addEventListener("click", (e) => {
            if(e.target == e.currentTarget){
            this.close();    
            }
        });
        document.querySelector("body").addEventListener("keyup", (e) => {
            let lighboxIsVisible = document.querySelector("#lightbox.show");
            if(lighboxIsVisible != null){
                switch(e.key){
                    case "ArrowRight" :
                        this.next();
                    break;
                    case "ArrowLeft" :
                        this.previous();
                    break;
                    case "Escape" :
                        this.close();
                    break;
                }
            }
        });


    }

    getElementById(id){
        return this.listElement.find(element => element.dataset.id == id);
    }

    display(){
        document.querySelector("#lightbox .content .picture").src = this.currentElement.src;
        document.querySelector("#lightbox").classList.add("show");
    }

    close() {
        document.querySelector("#lightbox").classList.remove("show");
    }
}
