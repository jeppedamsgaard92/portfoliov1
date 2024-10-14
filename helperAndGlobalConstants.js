
// HELPER FUNCTION      HELPER FUNCTION     HELPER FUNCTION
const newLinkText = (text, href, idName) => {
    const a = document.createElement('a');
    a.innerHTML = text || '';
    a.href = href;
    a.id = idName;
    return a; 
}
const newLinkIcon = (href, idNameATag, idNameIcon, classNameIcon) => {
    const a = document.createElement('a');
    a.href = href;
    a.id = idNameATag;
        const icon = newIcon(classNameIcon, idNameIcon);
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



