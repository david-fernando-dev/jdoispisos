const whatsappButton = document.querySelector('.whatsapp-button')
const whatsappArea = document.querySelector('.whatsapp-area')

const contactButtons = `<a href="#" class="contact">Falar com Jilmar</a>
<a href="#" class="contact">Falar com Jean</a>`

let contactVisible = false

let pagePosition = window.scrollY
const endOfPagePosition = 744

whatsappButton.addEventListener('click', () => {

    if(contactVisible) {
        contactVisible = false
        return whatsappArea.innerHTML = ''
    }

    contactVisible = true
    return whatsappArea.innerHTML = contactButtons
})

window.onscroll = () => {
    pagePosition = window.scrollY
    if(pagePosition >= endOfPagePosition){
        whatsappButton.setAttribute('style', 'bottom: 95px')
        whatsappArea.setAttribute('style', 'bottom: 165px')
        return
    }
    whatsappButton.setAttribute('style', 'bottom: 40px')
    whatsappArea.setAttribute('style', 'bottom: 110px')
    return
}