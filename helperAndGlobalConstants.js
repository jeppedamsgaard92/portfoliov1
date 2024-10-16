
// HELPER FUNCTION      HELPER FUNCTION     HELPER FUNCTION
const newLinkText = (text, href, idName, className) => {
    const a = document.createElement('a');
    a.innerHTML = text || '';
    a.href = href;
    a.id = idName || '';
    a.className = className || '';
    return a; 
}
//change to linkFrame
const newLinkIcon = (href, idNameATag, idNameIcon, classNameIcon) => {
    const a = document.createElement('a');
    a.href = href;
    a.id = idNameATag || '';
        const icon = newIcon(classNameIcon, idNameIcon);
    a.append(icon);
    return a;
}

const newIcon = (className, idName) => {
    const icon = document.createElement('i');
    icon.className = className || '';
    icon.id = idName || '';
    return icon;
}
const newSection = (idName) => { 
    const section = document.createElement('section');
    section.id = idName;
    return section;
}
const newDiv = (idName, className) => {
    const div = document.createElement('div');
    div.id = idName;
    div.className = className;
    return div;
}
const newImage = (src, idName, className, altName) => {
    const image = document.createElement('img');
    image.src = src;
    image.id = idName || '';
    image.className = className || '';
    image.alt = altName || '';
    return image;
}
const newTextElement = (type, innerHTML) => {
    const text = document.createElement(type);
    text.innerHTML = innerHTML || '';
    return text;
}




// GLOBAL CONSTANT      GLOBAL CONSTANT     GLOBAL CONSTANT   
const title = document.title;
const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const nav = document.createElement('nav');
const barsIcon = newIcon('fa-solid fa-bars', 'burger-menu'); //til burgermenu->open
const xmarkIcon = newIcon('fa-solid fa-xmark', 'burger-menu-x'); //til burgermenu->close

const individual = {
    organisation: 'Jeppe Damsgaard',
    period: '2023/24',
    addressLine1: '31 Charles St, Tweed Heads,',
    addressLine2: 'NSW 2485,',
    country: 'Australia',
    name: 'Jeppe Damsgaard',
    DOB: '25/12/1992',
    nationality: 'Danish',
    phone: '+61 (0) 435492098',
    email: 'jeppedamsgaard92@gmail.com',
    whatsapp: '+45 28259260',
}

