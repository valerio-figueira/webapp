const slider = {
    hero: document.querySelector('.sliders'),
    prev: document.querySelector('.prev'),
    next: document.querySelector('.next'),
    dots: document.querySelectorAll('.dot'),
    autorun: true,
    index: 0,
    direction: 'next'
}

slider.dots[0].classList.add('active')

slider.prev.addEventListener('click', () => {
    if(slider.direction.match('next')){
        slider.direction = 'prev'
        slider.hero.appendChild(slider.hero.firstElementChild)
    }
    slider.hero.style.transform = 'translate(100%)'
    slider.hero.style.justifyContent = 'flex-end'
})

slider.next.addEventListener('click', () => {
    if(slider.direction.match('prev')){
        slider.direction = 'next'
        slider.hero.prepend(slider.hero.lastElementChild)
    }
    slider.hero.style.transform = 'translate(-100%)'
    slider.hero.style.justifyContent = 'flex-start'
})

slider.hero.addEventListener('transitionend', () => {
    if(slider.direction.match('next')){
        slider.hero.appendChild(slider.hero.firstElementChild)
        console.log(slider.hero.firstElementChild.id)
        slider.index = slider.hero.firstElementChild.id
    } else if(slider.direction.match('prev')){
        slider.hero.prepend(slider.hero.lastElementChild)
        slider.index = slider.hero.lastElementChild.id
    }

    slider.dots.forEach(dot => {
        dot.classList.remove('active')
    })


    slider.hero.style.transition = "none";
    slider.hero.style.transform = "translate(0)"
    setTimeout(() => {
        slider.hero.style.transition = "transform 1s ease-out";
    })

    slider.dots[slider.index - 1].classList.add('active');
})