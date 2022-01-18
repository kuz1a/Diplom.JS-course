const sliderMain = () => {
    const sliderBlock = document.querySelector('.top-slider')
    const slides = sliderBlock.querySelectorAll('.item')
    const dots = []
    const dotsBlock = document.querySelector('.dots')
    let currentSlide = 0;
    let interval = 0;
    const timeInterval = 2000;

    
    
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    for (let i = slides.length -1; i >= 0; i --) {
        let dot = document.createElement('li')
        dot.classList.add('dot')
        dots[i] = dot
        dotsBlock.insertAdjacentElement('afterbegin', dots[i])
        
    }
    
    dots[0].classList.add('dot-active');
    const autoSlide = () => {
        
    
        prevSlide(slides, currentSlide, 'item-active');
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide ++;
        if (currentSlide === slides.length) {
            currentSlide = 0;
        } 
        
        nextSlide(slides, currentSlide, 'item-active');
        nextSlide(dots, currentSlide, 'dot-active')
    }
    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide,3000)
    }
    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot')) {
            return
        }
        

        prevSlide(slides, currentSlide, 'item-active');
        prevSlide(dots, currentSlide, 'dot-active')
        if (e.target.matches('#arrow-right')) {
            currentSlide ++;
            
        } else if (e.target.matches('#arrow-left')){
            currentSlide --;
            

        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }  
        
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'item-active');
        nextSlide(dots, currentSlide, 'dot-active')
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot')) {
            stopSlide()
        }
    },true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot')) {
            startSlide(timeInterval)
        }
    },true)

    startSlide(timeInterval)

}

export default sliderMain