let listImgslide = document.querySelectorAll('.img_slide');
const btnRight = document.getElementById('right');
const sliderBlock = document.querySelector('.slider');
const btnLeft = document.getElementById('left');

btnRight.addEventListener('click', () =>{
    listImgslide = document.querySelectorAll('.img_slide');
    const img = document.createElement('img');
    img.classList.add('img_slide');
    img.src = listImgslide[0].src;
    sliderBlock.removeChild(listImgslide[0]);
    sliderBlock.appendChild(img);
})
btnLeft.addEventListener('click', () =>{
    listImgslide = document.querySelectorAll('.img_slide');
    const img = document.createElement('img');
    img.classList.add('img_slide');
    img.src = listImgslide[listImgslide.length-1].src;
    sliderBlock.removeChild(listImgslide[listImgslide.length-1]);
    sliderBlock.prepend(img);
})