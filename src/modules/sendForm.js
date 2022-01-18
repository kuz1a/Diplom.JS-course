const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId)

    const statusBlock = document.createElement('div')
    const loadText = 'Loading...'
    const errorText = 'Проверьте данные формы'
    const successText = 'Thank you!'

    const validate = (list) => {
        let success = true;
        return success
        // if (list[0].value.length > 2 && list[1].value.length > 7) {
        //     success = true;
        //     return success
        // }
        // else {
        //     return false
        // }
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        
        const formData = new FormData(form)
        form.reset()
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)
        
        formData.forEach((value, key) => {
            formBody[key] = value.trim();
        })

        someElem.forEach(elem => {
            
            const element = document.getElementById(elem.id)
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent

            } else if (elem.type === 'input'){
                formBody[elem.id] = element.value
            }
        })

        if(validate(formElements)) {
            sendData(formBody)
            .then(data => {
                formElements.forEach(input => {
                    statusBlock.textContent = successText
                    input.value = ''
                    setTimeout(()=>{
                        statusBlock.textContent = '';        
                    },3000)
                })
            })
            .catch(error => {
                statusBlock.textContent = errorText
            
            })
        } else {
            statusBlock.textContent = errorText
        }

    }
    try {
        if (!form) {
            throw new Error('что-то сломалось')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm()
        })
    } catch(error){
        console.log(error.message);
    }
    
   
}

export default sendForm