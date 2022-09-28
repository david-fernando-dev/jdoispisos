const whatsappButton = document.querySelector('.whatsapp-button')
const whatsappArea = document.querySelector('.whatsapp-area')

const contactButtons = `<a href="#" class="contact">Falar com Jilmar</a>
<a href="#" class="contact">Falar com Jean</a>`

let contactVisible = false


whatsappButton.addEventListener('click', event  => {

    if(contactVisible) {
        contactVisible = false
        return whatsappArea.innerHTML = ''
    }
    contactVisible = true
    return whatsappArea.innerHTML = contactButtons
})