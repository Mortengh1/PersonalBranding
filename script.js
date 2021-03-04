console.log("Child Theme JS is running!");

document.addEventListener("DOMContentLoaded", function () {
    initScrollToTop();
});

// ---------- smooth scroll ---------- //
function initScrollToTop() {
    window.onscroll = function () {
        scrollFunction();
    };
}

// Makes the scrollTop button appear when the site is scrolled 300px down //
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}


function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Adding Header background color on scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll <= 150) {
        $('div.main-header-bar').removeClass('header-background ');
    } else {
        $('div.main-header-bar').addClass('header-background ');
    }
});