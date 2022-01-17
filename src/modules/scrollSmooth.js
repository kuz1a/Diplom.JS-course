const scrollSmooth = () => {
    const menu = document.querySelector('.top-menu')
    const anchors = menu.querySelectorAll('a')
    const upButton = document.querySelector('.up')
    const services = document.querySelector('#services')
    const body = document.querySelector('body')
    


    document.addEventListener('scroll', function(e){
      if (window.scrollY >= services.offsetTop) {
        upButton.style.display = 'block'

      } else {
        upButton.style.display = 'none'
      }
      
    })



    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href')
          if (document.querySelector(blockID)) {
              document.querySelector(blockID).scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                })
          }
      
        })
      }

      upButton.addEventListener('click', function(){
        window.scrollTo({
          behavior: 'smooth',
          top:0
        })
      })

  
}
export default scrollSmooth