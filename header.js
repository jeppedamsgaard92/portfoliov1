// CLASS    CLASS   CLASS   CLASS   CLASS
class GlobalNav {
    constructor(visibleLink){
        this.visibleLink = visibleLink;
    }
    renderNavElement(){
        return this.visibleLink;
    }
}

const globalNavInstances = {
    homeIcon: new GlobalNav (
        newLinkIcon('index.html', 'home-button-link', 'home-button', 'fa-solid fa-house')
    ),
    home: new GlobalNav (
        newLinkText('home', 'index.html', 'home-text')
    ),
    about: new GlobalNav (
        newLinkText('about', 'about.html')
    ),
    projects: new GlobalNav (
        newLinkText('projects', 'projects.html')
    ),
    contact: new GlobalNav (
        newLinkText('contact', '#')
    )
}

const globalNavArray = Object.values(globalNavInstances);

const createNav = () => {
    nav.append(barsIcon, xmarkIcon);
    globalNavArray.forEach(link=>{
        const navElement = link.renderNavElement();
        nav.append(navElement)
    })
    header.append(nav);
}



//EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS

barsIcon.addEventListener('click', () => {
    nav.style.opacity = '1';
    nav.style.visibility = 'visible';
    nav.style.transition= 'opacity 0.4s ease, visibility 0.4s';
    barsIcon.style.display = 'none'; 
    xmarkIcon.style.display = 'block'; 
});

xmarkIcon.addEventListener('click', () => {
    nav.style.opacity = '0';
    nav.style.visibility = 'hidden';
    nav.style.transition = 'opacity 0.4s ease, visibility 0.4s';
    barsIcon.style.display = 'block'; 
    xmarkIcon.style.display = 'none'; 
});

window.addEventListener('scroll', () => {
    if (xmarkIcon.style.display === 'block') { 
        nav.style.opacity = '0';
        nav.style.visibility = 'hidden'; 
        barsIcon.style.display = 'block'; 
        xmarkIcon.style.display = 'none'; 
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
        nav.style.transition = '';
        xmarkIcon.style.display = 'none';
        barsIcon.style.display = 'none';
    } else {
        nav.style.opacity = '0';
        nav.style.visibility = 'hidden';
        barsIcon.style.display = 'block';
        xmarkIcon.style.display = 'none';
    }
});



// EXECUTE      EXECUTE     EXECUTE     EXECUTE

createNav();