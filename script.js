
// HELPER FUNCTION      HELPER FUNCTION     HELPER FUNCTION
const newLinkText = (text, href, idName) => {
    const a = document.createElement('a');
    a.innerHTML = text || '';
    a.href = href;
    a.id = idName;
    return a; 
}
const newLinkIcon = (idName, href, className) => {
    const a = document.createElement('a');
    a.href = href;
        const icon = newIcon(className, idName);
    a.append(icon);
    return a;
}
const newIcon = (className, idName) => {
    const icon = document.createElement('i');
    icon.className = className;
    icon.id = idName;
    return icon;
}



// GLOBAL CONSTANT      GLOBAL CONSTANT     GLOBAL CONSTANT   
const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const nav = document.createElement('nav');
const barsIcon = newIcon('fa-solid fa-bars', 'burger-menu'); //til burgermenu->open
const xmarkIcon = newIcon('fa-solid fa-xmark', 'burger-menu-x'); //til burgermenu->close



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
        newLinkIcon('home-button', 'index.html', 'fa-solid fa-house')
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