window.onload = () =>{
    const popup_btns = document.querySelectorAll('.popup-btn')

    popup_btns.forEach(button => {
        button.addEventListener('click',e => {
            const target = e.target.dataset.target
            const popup_el = document.querySelector(target)
            if(popup_el != null) {
                popup_el.classList.toggle('is-active')
            }
        })
    })
}