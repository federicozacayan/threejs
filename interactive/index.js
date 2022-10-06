fetch('/interactive/UI/question.html').then(e=>e.text()).then(htmlstring=>{
    const popup = document.createElement('div')
    popup.innerHTML = htmlstring
    document.body.appendChild(popup.firstChild)
    document.body.querySelector('.popup-close').addEventListener('click',()=>{
        document.body.querySelector('.popup').remove()
    })
})