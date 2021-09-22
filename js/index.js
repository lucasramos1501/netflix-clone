//Carrousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

//Show box movie
var boxMovie = document.querySelectorAll(".box-movie");

boxMovie.forEach((serie) => {
    serie.addEventListener("click", () => {
        serie.children[1].classList.toggle("show");
    });
})

//Main Banner
function dinamicBanner(embedURLYoutubeIDVideo = "faJAT35j5Ss") {
    var bannerMain = document.querySelector(".banner-main");
    var staticBanner = document.querySelector(".static-banner");

    bannerMain.removeChild(staticBanner);

    bannerMain.style.background = "var(--black)";

    bannerMain.style.padding = 0;
    bannerMain.style.overflow = "hidden";

    var iframe = document.createElement("iframe");
    iframe.classList.add("videoDinamicBanner");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.transform = "scale(1.5)";

    iframe.setAttribute("src", "https://www.youtube.com/embed/" + embedURLYoutubeIDVideo + "?autoplay=1&controls=0&fs=0&loop=1");
    iframe.setAttribute("allow", "autoplay");

    bannerMain.appendChild(iframe);

    var mouseBlock = document.createElement("div");
    iframe.classList.add("mouseBlock");
    mouseBlock.style.width = "100%";
    mouseBlock.style.height = "100%";
    mouseBlock.style.position = "absolute";
    mouseBlock.style.top = 0;
    mouseBlock.style.left = 0;

    bannerMain.appendChild(mouseBlock);
}

setTimeout(dinamicBanner, 3000);

//Play

function playTrailer() {
    var iconsOfPlay = document.querySelectorAll(".fa-play");

    iconsOfPlay.forEach((icon) => {
        icon.addEventListener("click", () => {
            console.log(icon);
            embedURLYoutubeIDVideo = icon.getAttribute("id");

            var bannerMain = document.querySelector(".banner-main");
            var videoDinamicBanner = document.querySelector(".videoDinamicBanner");

            bannerMain.removeChild(videoDinamicBanner);

            bannerMain.style.background = "var(--black)";

            bannerMain.style.padding = 0;
            bannerMain.style.overflow = "hidden";

            var iframe = document.createElement("iframe");
            iframe.classList.add("videoDinamicBanner");
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.transform = "scale(1.5)";

            iframe.setAttribute("src", "https://www.youtube.com/embed/" + embedURLYoutubeIDVideo + "?autoplay=1&controls=0&fs=0&loop=1");
            iframe.setAttribute("allow", "autoplay");

            bannerMain.appendChild(iframe);

            var mouseBlock = document.createElement("div");
            iframe.classList.add("mouseBlock");
            mouseBlock.style.width = "100%";
            mouseBlock.style.height = "100%";
            mouseBlock.style.position = "absolute";
            mouseBlock.style.top = 0;
            mouseBlock.style.left = 0;

            bannerMain.appendChild(mouseBlock);

            window.scrollTo(0, 0);
        })
    })
}
playTrailer();

//Plus
var iconsOfPlus = document.querySelectorAll(".fa-plus");
var iconsOfCheck = document.querySelectorAll(".fa-check");

function changeIcon(icon){
    var typeOfIcon = icon.classList[1];
    if(typeOfIcon == "fa-plus"){
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-check");
    }else{
        icon.classList.remove("fa-check");
        icon.classList.add("fa-plus");
    }
}

iconsOfPlus.forEach((plus) => {
    plus.addEventListener("click", ()=>{changeIcon(plus)})
});

iconsOfCheck.forEach((check) => {
    check.addEventListener("click", ()=>{changeIcon(check)})
});

//Like and Deslike
    var iconsOfLike = document.querySelectorAll(".fa-thumbs-up");
    var iconsOfDeslike = document.querySelectorAll(".fa-thumbs-down");

    function changeOption(likeOrDelike){
        var valueOfOpacity = likeOrDelike.style.opacity;
        if(valueOfOpacity == 1){
            likeOrDelike.style.opacity = 0.7
        }else{
            likeOrDelike.style.opacity = 1;
        }
    }
    
    iconsOfLike.forEach((like) => {
        like.addEventListener("click", ()=>{changeOption(like)})
    });

    iconsOfDeslike.forEach((deslike) => {
        deslike.addEventListener("click", ()=>{changeOption(deslike)})
    });
//Options