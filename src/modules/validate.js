const validate = () => {

    const modalCallback = document.querySelector("#callback");
    const userInput = modalCallback.querySelector('.name')
   
    const phoneInput = modalCallback.querySelector('.tel');


   
  
    phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/[^0-9\(\)\-\+]/g,'').substring(0,15)     
    })
  
    userInput.addEventListener('input', () => {
        let namePlaceholderOne = userInput.getAttribute('placeholder')
        if(namePlaceholderOne === 'Ваше имя') {
            if (userInput.value.charAt(0) === ' ') {
                userInput.value = ''
            } else {
                userInput.value = userInput.value.replace(/[^а-яА-Я\s\-]/g, '')
            }
           
        }
    })

}
export default validate