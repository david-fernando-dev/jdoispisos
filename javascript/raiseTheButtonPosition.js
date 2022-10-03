function raiseTheButtonPosition(whatsappButton, whatsappArea){
    const pagePosition = window.scrollY
    const endOfPagePosition = parseInt(document.body.offsetHeight * 54.3 / 100)
    if(pagePosition >= endOfPagePosition){
        whatsappButton.setAttribute('style', 'bottom: 95px')
        whatsappArea.setAttribute('style', 'bottom: 165px')
        return
    }
    whatsappButton.setAttribute('style', 'bottom: 40px')
    whatsappArea.setAttribute('style', 'bottom: 110px')
    return
}

export default raiseTheButtonPosition