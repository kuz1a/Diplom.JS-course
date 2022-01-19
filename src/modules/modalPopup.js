const modalPopup = () => {
    const body = document.querySelector('body')
    const modalBtn = document.querySelector('.callback-btn')
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay ')
    
    
    body.addEventListener('click', function(e){
        
        if (e.target.classList.contains('callback-btn') || e.target.classList.contains('button-services')) {
           modalCallback.style.display = 'block'
           modalOverlay.style.display = 'block'
        }
        if (e.target.classList.contains('modal-overlay') || e.target.parentElement.matches('.modal-close') ) {
            modalCallback.style.display = 'none'
            modalOverlay.style.display = 'none'
        }
        if (e.target.classList.contains('fancyboxModal')) {
            modalCallback.style.display = 'block'
            modalOverlay.style.display = 'block'
        }
        
    })

}


export default modalPopup