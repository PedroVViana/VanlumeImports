let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let closeOpenBtn = document.querySelector(".nav-links .bx-x"); 
let navlinks = document.querySelector(".nav-links"); 

menuOpenBtn.addEventListener("click", ()=> {
    navlinks.style.top= "0";
})

closeOpenBtn.addEventListener("click", ()=> {
    navlinks.style.top= "-100%";
})

let catalogoArrow = document.querySelector(".catalogo-arrow");
catalogoArrow.addEventListener("click", ()=> {
    navlinks.classList.toggle("show1")
})

//Catálogo 

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || 
            dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }
    })
}

VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
    max: 25,
    speed: 400
});

const sizes = document.querySelectorAll(".size");

for (let i = 0; 1< sizes.length; i++) {
    sizes[i].addEventListener("click", () => {
        for (let i = 0; i < sizes.length; i++) {
            sizes[i].classList.remove("active");
        }
        sizes[i].classList.add("active");
    });
}