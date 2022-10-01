import raiseTheButtonPosition from "./raiseTheButtonPosition.js"

const whatsappButton = document.querySelector('.whatsapp-button')
const whatsappArea = document.querySelector('.whatsapp-area')

const contactButtons = `<a href="https://api.whatsapp.com/send?phone=5511991645108&text=Olá Jilmar! Vim pelo site JJPisos. Gostaria de fazer um orçamento." target="_blank" class="contact">Falar com Jilmar</a>
<a href="https://api.whatsapp.com/send?phone=5511953365061&text=Olá Jean! Vim pelo site JJPisos. Gostaria de fazer um orçamento." target="_blank" class="contact">Falar com Jean</a>`

let contactVisible = false

whatsappButton.addEventListener('click', () => {
    return toggleContactsLink()
}

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