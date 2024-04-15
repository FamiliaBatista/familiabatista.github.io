let slideIndex = 1;

function fadeIn(element, callback)
{
    element.style.opacity = 0;
    var tick = function ()
    {
        element.style.opacity = +element.style.opacity + 0.02;
        if (+element.style.opacity < 1)
        {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
        else { callback(); }
    };
    tick();
}

function open(url)
{
    window.location = url;
}

function plusSlides(n)
{
    showSlides(slideIndex += n);
}
  
function currentSlide(n)
{
    showSlides(slideIndex = n);
}
  
function showSlides(n)
{
    let i;
    let slides = document.getElementsByClassName("slideshow-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove('slideshow-visible');
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].classList.add('slideshow-visible');
    dots[slideIndex-1].className += " active";
}

window.onload = function()
{
    fadeIn(document.getElementById("main-header"), function()
    {
        showSlides(slideIndex);
        fadeIn(document.getElementById("established"));
        fadeIn(document.getElementById("slideshow"), function()
        {
            fadeIn(document.getElementById("welcome-blurb"));
        });
    });
};
