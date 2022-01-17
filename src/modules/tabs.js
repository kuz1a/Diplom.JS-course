const tabs = () => {
    
    const tabPanel = document.querySelector('.accordeon')
    const tabContent = tabPanel.querySelectorAll('.element-content');
    const titleTab = tabPanel.querySelectorAll('.title');
    const tabElement = tabPanel.querySelectorAll('.element')


    tabPanel.addEventListener('click', function(e){
    

        if(e.target.closest('.title')) {
            const tabBtn = e.target.closest('.title')
            titleTab.forEach((tab,tabIndex) => {
                if (tab === tabBtn) {
                    tabElement[tabIndex].classList.add('active')
                    tab.classList.add('active')
                    tabContent[tabIndex].style.display = 'block'
                } else {
                    tab.classList.remove('active')
                    tabElement[tabIndex].classList.remove('active')
                    tabContent[tabIndex].style.display = 'none'
                }
                
            })
        }

    })

}
export default tabs