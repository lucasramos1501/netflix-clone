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
        console.log(serie.children[1]);
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
    console.log(iconsOfPlay);

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
//Like
//Deskile
//Options