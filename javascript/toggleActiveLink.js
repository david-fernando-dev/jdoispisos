function toggleActiveLink(links){
    const { homeLink, servicesLink, aboutLink } = links

    function activeHomeLink(){
        servicesLink.classList.remove('text-dark')
        aboutLink.classList.remove('text-dark')
        homeLink.classList.add('text-dark')
    }

    function activeServicesLink(){
        homeLink.classList.remove('text-dark')
        aboutLink.classList.remove('text-dark')
        servicesLink.classList.add('text-dark')
    }

    function activeAboutLink(){
        homeLink.classList.remove('text-dark')
        servicesLink.classList.remove('text-dark')
        aboutLink.classList.add('text-dark')
    }

    return {
        activeHomeLink,
        activeServicesLink,
        activeAboutLink
    }
}

export default toggleActiveLink