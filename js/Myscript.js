let slideindex=0;
showSlider();

function showSlider(){
    let i;
    let slides = document.getElementsByClassName("myslides");
    for (i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slideindex++;
    if (slideindex > slides.length){
        slideindex = 1
    }
    slides[slideindex-1].style.display="block";
    setTimeout(showSlider, 3000);
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayHoverPause:true,
    margin:10,
   

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});
