import raiseTheButtonPosition from "./raiseTheButtonPosition.js"
import toggleActiveLink from "./toggleActiveLink.js"

const whatsappButton = document.querySelector('.whatsapp-button')
const whatsappArea = document.querySelector('.whatsapp-area')
const homeLink = document.querySelector('#home-link')
const servicesLink = document.querySelector('#services-link')
const aboutLink = document.querySelector('#about-link')

const links = { 
    homeLink, 
    servicesLink, 
    aboutLink 
}

const contactButtons = `<a href="https://api.whatsapp.com/send?phone=5511991645108&text=Olá Jilmar! Vim pelo site J2Pisos. Gostaria de fazer um orçamento." target="_blank" class="contact">Falar com Jilmar</a>
<a href="https://api.whatsapp.com/send?phone=5511953365061&text=Olá Jean! Vim pelo site J2Pisos. Gostaria de fazer um orçamento." target="_blank" class="contact">Falar com Jean</a>`

let contactVisible = false

whatsappButton.addEventListener('click', () => {
    return toggleContactsLink()
})

servicesLink.addEventListener('click', () => {
    return toggleActiveLink(links).activeServicesLink()
})

homeLink.addEventListener('click', () => {
    return toggleActiveLink(links).activeHomeLink()
})

aboutLink.addEventListener('click', () => {
    return toggleActiveLink(links).activeAboutLink()
})

function toggleContactsLink(){

    if(contactVisible) {
        contactVisible = false
        return whatsappArea.innerHTML = ''
    }

    contactVisible = true
    return whatsappArea.innerHTML = contactButtons
}

window.onscroll = () => {
    return raiseTheButtonPosition(whatsappButton, whatsappArea)
}