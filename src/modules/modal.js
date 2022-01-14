const modal = () => {
    
    const modalBtn = document.querySelector('.callback-btn')
    console.log(modalBtn);
    modalBtn.addEventListener('click', function(e){
        e.preventDefault();
        console.log('sss');
    })
}

export default modal