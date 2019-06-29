// get all carousels in the page and initialize them
const $carouselList = document.querySelectorAll('.js-carousel')
for(const $carousel of $carouselList)
{
    const carousel = new NetatmoCarousel($carousel)
}