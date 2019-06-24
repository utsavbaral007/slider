var slider = document.querySelector('.slider')
var button = document.querySelector('.button')
var dots = document.querySelector('.dots')

var currentSlide = document.createElement('div')
currentSlide.classList.add('slide')
var currentImg = document.createElement('img')
currentImg.src = 'https://picsum.photos/1000/1000'
currentSlide.appendChild(currentImg)
slider.appendChild(currentSlide)

var slide = document.createElement('div')
slide.classList.add('slide')
var slideImg = document.createElement('img')
slideImg.src = './2.jpg'
slide.appendChild(slideImg)
slider.appendChild(slide)

var slideNext = document.createElement('div')
slideNext.classList.add('slide')
var nextSlide = document.createElement('img')
nextSlide.src = './3.jpg'
slideNext.appendChild(nextSlide)
slider.appendChild(slideNext)

var actionPrevious = document.createElement('a')
actionPrevious.id = 'previous'
actionPrevious.innerHTML = '&#10094'
button.appendChild(actionPrevious)

var actionNext = document.createElement('a')
actionNext.id = 'next'
actionNext.innerHTML = '&#10095'
button.appendChild(actionNext)

var dot = document.createElement('div')
dot.classList.add('dotMove')
var firstDot = document.createElement('div')
firstDot.classList.add('dot')
dot.appendChild(firstDot)

var secondDot = document.createElement('div')
secondDot.classList.add('dot')
dot.appendChild(secondDot)

var thirdDot = document.createElement('div')
thirdDot.classList.add('dot')
dot.appendChild(thirdDot)
dots.appendChild(dot)

var slideIndex = 1;
var i;
function showSlides(n) {
    var slides = document.getElementsByClassName('slide')
    var dots = document.getElementsByClassName('dot')
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].className += ' active'
}
showSlides(slideIndex)

var next = document.getElementById('next')
next.onclick = function () {
    showSlides(slideIndex += 1)
}
var previous = document.getElementById('previous')
previous.onclick = function () {
    showSlides(slideIndex += -1)
}


