//Carrousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin:10,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

//Show box movie
var boxMovie = document.querySelectorAll(".box-movie");

boxMovie.forEach((serie)=>{
    serie.addEventListener("click", ()=>{
        serie.children[1].classList.toggle("show");
        console.log(serie.children[1]);
    });
})