///////////////////////////////////////
// POP UP IMAGES

const images = document.querySelectorAll('.gallery__photo'),
    popup = document.querySelector('#popup'),
    popupImage = document.querySelector('.popup__photo'),
    popupClose = document.querySelector('.popup__close');

images.forEach(image => {
    image.addEventListener('click', () => {
        const imgSrc = image.getAttribute('src');
        const imgAlt = image.getAttribute('alt');
        const index = imgSrc.indexOf('.');
        imgLarge = imgSrc.substring(0,index) + '-large' + imgSrc.substring(index,imgSrc.length);
        popupImage.src = imgLarge;
        popupImage.alt = imgAlt;
        popup.classList.add('popup--open');
    });
});

popupClose.addEventListener('click', () => {
    popup.classList.remove('popup--open');
});