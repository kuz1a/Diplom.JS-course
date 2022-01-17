const scrollSmooth = () => {
    const menu = document.querySelector('.top-menu')
    const anchors = menu.querySelectorAll('a')
    const upButton = document.querySelector('.up')
    
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
        console.log('ss');
        window.scrollTo({
          behavior: 'smooth',
          top:0
        })
      })

      // serviceBlock.addEventListener('click', function(e){
      //   e.preventDefault()
          
      //     const blockID = serviceBlock.getAttribute('href')
      //     if (document.querySelector(blockID)) {
      //         document.querySelector(blockID).scrollIntoView({
      //             behavior: 'smooth',
      //             block: 'start'
      //           })
      //     }
      // })
  
}
export default scrollSmooth