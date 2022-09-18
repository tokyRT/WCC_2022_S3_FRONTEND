(function () {


  //overlay loader
  var overlay = document.querySelector("body>.overlay");
  window.addEventListener("load", function () {
    overlay.classList.add("loaded");
  });
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    scrollbar: false,
    autoplay: {
      delay: 5000
    },

    // If we need pagination
    pagination: {
      el: ".slide-navigation .pagination",
      clickable: true,
      
    },

    // Navigation arrows
    navigation: {
      prevEl: ".slide-navigation .prev",
      nextEl: ".slide-navigation .next",
    },

    autoplay: true,
    slidesPerView: 2,
    breakpoints: {
      1280: {
        slidesPerView: 3
      }
    }

  });

  const mapContainer = document.querySelector(".floating-cards");
  function zoom(scale){
    mapContainer.style.transform = `scale(${scale})`;
  }

  let zoomNb = 1;
  let scale = 1;
  const zoomInBtn = document.querySelector('.zoom-in');
  const zoomOutBtn = document.querySelector('.zoom-out');

  zoomInBtn.addEventListener('click', function(){
    scale += 0.3;
    zoom(scale);
    //enable zoom out btn
    zoomOutBtn.classList.remove('disabled');
    if(scale == 2.2) {
      zoomInBtn.classList.add('disabled');
    }
  });

  zoomOutBtn.addEventListener('click', function(){
    scale -= 0.3;
    zoom(scale);
    //enable zoom out btn
    zoomInBtn.classList.remove('disabled');
    if(scale == 1) {
      zoomOutBtn.classList.add('disabled');
    }
  });


  const toggleBtn = document.querySelector('.header .toggle-icon');
const nav = document.querySelector('nav')
toggleBtn.addEventListener('click', function(){
    nav.classList.add('show');
    document.body.style.overflowY = "hidden";
    console.log("dfdf");
});

const closeNavBtn = document.querySelector('nav .close-icon');
closeNavBtn.addEventListener('click', function(){
    nav.classList.remove('show');
    document.body.style.overflowY = "scroll";
});

})();
