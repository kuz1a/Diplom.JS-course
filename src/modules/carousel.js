//Слайдер карусель
'use strict';

const sliderCarousel = () => {
  class SliderCarousel {
    constructor({
      main,
      wrap,
      next,
      prev,
      infinity = false,
      position = 0,
      slidesToShow = 3,
      responsive = []
    }) {
      if (!main || !wrap) {
        console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!');
      }
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slidesToShow = slidesToShow;
      this.options = {
        position,
        infinity,
        widthSlide: Math.floor(100 / this.slidesToShow),
        maxPosition: this.slides.length - this.slidesToShow,
        
      };
      
      this.responsive = responsive;
    }
    init() {
    
      this.addGloClass();
      this.addStyle();
      if (this.next && this.prev) {
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      }
      if (this.responsive) {
        this.responseInit();
      }
    }
    addGloClass() {
      this.main.classList.add('glo-slider');
      this.wrap.classList.add('glo-slider__wrap');
      for (const item of this.slides) {
        item.classList.add('glo-slider__item');
      }
    }
    addStyle() {
      let style = document.getElementById('sliderCarousel-style');
      if (!style) {
        style = document.createElement('style');
        style.id = 'sliderCarousel-style';
      }
      style.textContent = `
        .glo-slider {
          overflow: hidden;
        }
        .glo-slider__wrap {
          display: flex;
          transition: transform 0.5s;
          will-change: transform;
          margin-bottom: 30px !important;
        }
        .glo-slider__item {
          align-items: center;
          justify-content: center;
          flex: 0 0 ${this.options.widthSlide}%;
          margin: auto 0 !important;
        }
        .slider-arrow {
          position: relative;
          top: 75px;
          margin-top: -18px;
          z-index: 100;
          cursor: pointer
        }
        .slider-arrow span {
          display: block;
          width: 36px;
          height: 37px;
          background-color: #f4c71b;
          border-radius: 50%;
          text-align: center;
          padding-top: 11px
        }
        #services #arrow-right{
          position: absolute;
          left: 97%;
        }
        @media only screen and (max-width: 1000px) {
          #services #arrow-right{
            left: 95%;
          }
        }
      `;
      document.head.appendChild(style);
    
    }
    controlSlider() {
      this.prev.addEventListener('click', this.prevSlider.bind(this));
      this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    prevSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }
    nextSlider() {
      if (this.options.infinity || this.options.position < this.options.maxPosition) {
        ++this.options.position;
        if (this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }
    addArrow() {
      this.prev = document.createElement('button');
      this.next = document.createElement('button');
      this.prev.className = 'glo-slider__prev';
      this.next.className = 'glo-slider__next';
      this.main.appendChild(this.prev);
      this.main.appendChild(this.next);
      const style = document.createElement('style');
      style.id = 'sliderCarousel';
      style.textContent = `
        .glo-slider__prev, .glo-slider__next {
          margin: 0 10px;
          border: 15px solid transparent;
          background: transparent;
        }
        .glo-slider__next {
          border-left-color: #19b5fe
        }
        .glo-slider__prev {
          border-right-color: #19b5fe
        }
        .glo-slider__prev:hover,
        .glo-slider__next:hover,
        .glo-slider__prev:focus,
        .glo-slider__next:focus {
          background: transparent;
          outline: transparent;
        }
      `;
      document.head.appendChild(style);
    }
    responseInit() {
      const slidesToShowDefault = this.slidesToShow;
      const allResponse = this.responsive.map(item => item.breakpoint);
      const maxResponse = Math.max(...allResponse);
      const responseStyle = () => {
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      };
      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slidesToShow = this.responsive[i].slidesToShow;
              responseStyle();
            }
          }
        } else {
          this.slidesToShow = slidesToShowDefault;
          responseStyle();
        }
      };
      checkResponse();
      window.addEventListener('resize', checkResponse);
    }
  }

  const carousel = new SliderCarousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    next: '.arrow-right',
    prev: '.arrow-left',
    slidesToShow: 3,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3
      },
      {
        breakpoint: 768,
        slidesToShow: 2
      },
      {
        breakpoint: 576,
        slidesToShow: 1
      },
    ]
  });
  carousel.init();
};

export default sliderCarousel;