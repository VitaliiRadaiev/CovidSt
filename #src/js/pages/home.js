{
    let locationList = document.querySelector('.locations-b__list');
    if(locationList) {
        let dataSwiper  = new Swiper(locationList.querySelector('.swiper-container'), {
            direction: "vertical",
            slidesPerView: "auto",
            freeMode: true,
            scrollbar: {
              el:locationList.querySelector('.swiper-scrollbar'),
              draggable: true,
            },
            mousewheel: true,
          });
    }
}