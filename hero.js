


//HERO BLUEPRINT
class Hero {
    constructor ({title, subtitle, introText, heroImage}){
        this.title = title;
        this.subtitle = subtitle;
        this.introText = introText;
        this.heroImage = heroImage;
    } 

    renderHero(){
        const section = newSection('hero-section');
            const container = newDiv('title-hero-container');
                const title = this.title;
            container.append(title);
        section.append(container);

            if (this.heroImage) {
                const imageContainer = newDiv('headshot-container');
                imageContainer.append(this.heroImage);
                container.append(imageContainer); 
            }
            if (this.subtitle) {
                const subtitle = this.subtitle;
                subtitle.id = 'subtitle-hero'
                section.append(subtitle);
            }
            if (this.introText) {
                const introText = this.introText;
                introText.id = 'intro-hero';
                section.append(introText);
            }
        return section; 
    }
}
const heroInstances = {
    homePage: new Hero({
        title: newTextElement('h1', 'Portfolio'),
        subtitle: newTextElement('h3', `Works created ${individual.period} by ${individual.organisation}`),
        heroImage: newImage('img/mig-round.png', 'headshot', '', 'Picture of developer')
    }),
    projectsPage: new Hero ({
        title: newTextElement('h1', 'Projects'),
        introText: newTextElement('p', 'I design and build pixel-perfect, responsive web designs that enhance user experiences. The projects carried out for university are focused on one key skill, such as communicating brand values or OOP in JavaScript. I work in JavaScript, SCSS and HTML, with a focus on crafting dynamic and intuitive web applications. I\'m committed to deliver high-quality code and innovative solutions, and I love to continuously learn and adapt to new technologies and industry trends.')
    }),
    aboutPage: new Hero({
        title: newTextElement('h1', 'Hi! I\'m Jeppe, and this is my story.'),
        introText: 'Below are a few stories from my life. Who wants to read bullet-point-facts about people these days anyways. Long story short: I grew up in Denmark, and I\'m now living in Australia. I study multimedia design and love front end development and graphics design. I was born in 1992 on Christmas day, had a great childhood in the country side, and before i discovered web development, I worked in mechanical engineering. I\'m a keen surfer and skier but Denmark has neither, so here I am. I\'ve lived abroad for 10 odd years, and it\'s time to settle down. Keep reading if you wanna know how I ended up here or call me on +61 (0) 435492098 if you\'ve heard enough already!',    }),
}

//INFORMATION BLOCK FOR HOME PAGE
class InformationBlock {
    constructor({idName, title, information1, information2, information3}){
        this.idName = idName;
        this.title = title;
        this.information1 = information1;
        this.information2 = information2;
        this.information3 = information3;
    }
    renderInformationBlock() {
            const innerContainer = newDiv(this.idName, 'info');
                const title = this.title;
                title.className = 'info-category';
                const contentContainer = newDiv(null, 'info-order-container info');
                    const paragraph1 = this.information1;
                    const paragraph2 = this.information2;
                    const paragraph3 = this.information3;
                contentContainer.append(paragraph1, paragraph2, paragraph3);
            innerContainer.append(title, contentContainer);
            return innerContainer;
        
    }
}
const informationInstances = {
    address: new InformationBlock ({
        idName: 'first-info-container',
        title: newTextElement('p', 'Address') ,
        information1: newTextElement('p', `${individual.addressLine1}`),
        information2: newTextElement('p', `${individual.addressLine2}`),
        information3: newTextElement('p', `${individual.country}`),
    }),
    personal: new InformationBlock ({
        idName: 'second-info-container',
        title: newTextElement('p', 'Personal information'),
        information1: newTextElement('p',`Name: ${individual.name}`),
        information2: newTextElement('p',`DOB: ${individual.DOB}`),
        information3: newTextElement('p',`Nationality: ${individual.nationality}`),
    }),
    contact: new InformationBlock ({
        idName: 'last-info-container',
        title: newTextElement('p','Contact'),
        information1: newTextElement('p',`Phone: ${individual.phone}`),
        information2: newTextElement('p',`E-mail: ${individual.email}`),
        information3: newTextElement('p',`WhatsApp: ${individual.whatsapp}`),
    }),
}
const informationBlockArray = Object.values(informationInstances);

//HEROS HEROS HEROS HEROS HEROS HEROS HEROS HEROS HEROS HEROS
const createHeroHomePage = () => {
    const heroSection = heroInstances.homePage.renderHero(); 
        const outerInfoContainer = newDiv(null, 'info-container');
        informationBlockArray.forEach(informationInstance => {
        const informationBlock = informationInstance.renderInformationBlock();
        outerInfoContainer.append(informationBlock);
        })
    heroSection.append(outerInfoContainer);
    main.append(heroSection); 
}

const createHeroProjectPage = () => {
    const heroSection = heroInstances.projectsPage.renderHero(); 
    main.append(heroSection); 
}

const createHeroAboutPage = () => {
    const heroSection = heroInstances.aboutPage.renderHero(); 
    main.append(heroSection); 
}

// EXECUTE
switch(true) {
    case title === 'Home page':
        createHeroHomePage();
    break;
    case title === 'Projects page':
        createHeroProjectPage();
    break;
    case title === 'About page':
        createHeroAboutPage();
    break;
}



