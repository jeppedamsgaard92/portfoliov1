class Projects {
    constructor({ background, projectName, client, date, details, decoration, cta, linkFrame, image, conclusion}) {
        this.background = background;
        this.projectName = projectName;
        this.client = client;
        this.date = date;
        this.details = details;
        this.decoration = decoration;
        this.cta = cta;
        this.linkFrame = linkFrame;
        this.image = image;
        this.conclusion = conclusion;
    }
}


// HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE
// HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE
// HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE - HOME PAGE

class HighlightedProjects extends Projects {
    constructor(params){
        super(params);
    }

    static renderHighlightedSection(){ 
        const highLightedSection = newSection('highlighted-projects');
        const sectionHeader = document.createElement('h2');
        sectionHeader.innerHTML = 'highlighted projects';
        highLightedSection.append(sectionHeader);
        return highLightedSection;
    }
    renderHighlightedProject() {

        const outerContainer = newDiv(null, 'highlighted-project');
            const backgroundImgContainer = newDiv(null, 'project-background-container');
            backgroundImgContainer.appendChild(this.background);
            const decorationContainer = newDiv(null, 'project-illustration');
                const pageShadow = newDiv(null, 'page-shadow');
                const decorationImgContainer = newDiv(null, 'img-container');
                decorationImgContainer.appendChild(this.decoration);
            decorationContainer.append(pageShadow, decorationImgContainer);
            const projectInfoContainer = newDiv('project-info', null);
                const projectName = document.createElement('h3');
                projectName.innerHTML = this.projectName;
                const client = document.createElement('h4');
                client.innerHTML = this.client;
                const date = document.createElement('h4');
                date.innerHTML = this.date;
                const details = document.createElement('p');
                details.innerHTML = this.details;
            projectInfoContainer.append(projectName, client, date, details);
            

        outerContainer.append(backgroundImgContainer, projectInfoContainer, decorationContainer);
        return outerContainer; 
    }
    renderCta() {
        const CTA = newDiv(null, 'cta');
        CTA.appendChild(this.cta);
        return CTA;
    }
}
const highlightedProjectsInstances = {
    woodwatch: new HighlightedProjects({
        background: newImage('img/woodwatch-forfra.png', null, null,null),
        projectName: 'WoodWatch', // projectName (h3)
        client: 'Client: School project, for the company: Gate 3A APS', // client (h4)
        date: '2nd semester, 3rd project, 2024', // date (h4)
        details: 'The task was to rebrand an actual product from "real life" using WordPress to make the website. I was living in Ericeira, Portugal, at the time, and worked with another remote developer, so I had no opportunities to visit the company and take photos. All photos are therefor photoshoped stock photos and 3D CAD models (thank god I used to do mechanical engineering, so making the 3D CAD model was light work). I mainly focused on UI/UX and all visual productions such as redesigning the logo, editing photos and website design.',        
        decoration: newImage('img/woodwatch-text-logo-final.png', null, null, null),
        cta: newLinkText('Read more!', 'projects.html') // cta 
    }),
    dreamshot: new HighlightedProjects({
        background: newImage('img/dreamshot-background.png', null, null, null),
        projectName: 'DreamShot', // projectName (h3)
        client: 'Client: School project', // client (h4)
        date: '2nd semester, 1st project, 2024', // date (h4)
        details: 'Dreamshot was a project focused on visually communicating brand values for a made-up multimediea bureau. My brother and I study together, and for the past 10 odd years we\'ve travelled the world, both working with coffee. We were living in Sri Lanka at the time (hence the awesome photos) and decided to create the fictional coffee-specialist mediea bureau: "dreamshot". As in every project, the planning and design process is a huge task in its own, but other than that I was primarily focused on the graphics design, shooting video, photos, editing, but also coded large parts of the website.', // details (paragraph)
        decoration: newImage('img/dreamshot-logo.png', null, null, null),
        cta: newLinkText('Read more!', 'projects.html') // cta 
    })
};
const projectArray = Object.values(highlightedProjectsInstances);
const createHighlightedProjects = () => {
    const sectionContainer = HighlightedProjects.renderHighlightedSection();

    projectArray.forEach(projectInstance => {
        const projectElement = projectInstance.renderHighlightedProject();
        const projectCTA = projectInstance.renderCta();
        sectionContainer.append(projectElement, projectCTA); // Append each project to the DOM
    });
    main.append(sectionContainer);
}

// ALL PROJECTS - ALL PROJECTS - ALL PROJECTS - ALL PROJECTS - ALL PROJECTS - ALL PROJECTS 
class AllProjects extends Projects {
    constructor(params){
        super(params);
    }
    
    renderAllProjects() {
        const linkFrame = this.linkFrame;
        const projectContainer = newDiv(null, 'project');
        
        const projectName = document.createElement('h3');
        projectName.innerHTML = this.projectName;
        
        const backgroundContainer = newDiv(null, 'all-projects-background-container');
        if (this.background) {
            backgroundContainer.appendChild(this.background);
        }
    
        const imageContainer = newDiv(null, 'all-projects-img-container');
        if (this.image) {
            imageContainer.appendChild(this.image);
        }
    
        const decorationContainer = newDiv(null, 'all-projects-logo-container');
        if (this.decoration) {
            decorationContainer.appendChild(this.decoration);
        }
    
        projectContainer.append(projectName, backgroundContainer, imageContainer, decorationContainer);
        linkFrame.appendChild(projectContainer);
        
        return linkFrame;
    }
    
}

const allProjectsInstances = {
    portfolio: new AllProjects ({
        linkFrame: newLinkText(null, 'projects.html'),
        projectName: 'This portfolio',
        background: newImage('img/lisbon-wall.png', null, 'all-projects-background-img', ''),
        image: newImage('img/portfolio-frontpage.png', null, null, 'portfolio screenshot of front page'),
        decoration: newImage('img/mig-round.png', null, null, 'photo of the developer behind the project'),
    }),
    baySurf: new AllProjects ({
        linkFrame: newLinkText(null, 'projects.html'),
        projectName: 'Bay Surf Hostel',
        background: newImage('img/baysurf-owners.png', null, 'all-projects-background-img', ''),
        image: newImage('img/baysurf-window.png', null, null, 'picture from the hostel'),
        decoration: newImage('img/baysurf-logo.png', null, null, 'bay surf hostel logo'),
    }),
    woodwatch: new AllProjects ({
        linkFrame: newLinkText(null, 'projects.html'),
        projectName: 'Woodwatch',
        background: newImage('img/woodwatch-forfra.png', null, 'all-projects-background-img', ''),
        image: newImage('img/woodwatch-man.png', null, null, 'image of man used for the branding of woodwatch'),
        decoration: newImage('img/woodwatch-logo-ny-hvid-v5.png', null, null, 'woodwatch logo'),
    }),
    dataSecurity: new AllProjects ({
        linkFrame: newLinkText(null, 'projects.html'),
        projectName: 'Data security',
        background: newImage('img/datasikkerhed-baggrund2.png', null, 'all-projects-background-img', ''),
        image: newImage('img/datasikkerhed-billede.png', null, null, 'screenshot from data security page'),
        decoration: newImage('img/datasikkerhed-logo.png', null, null, 'data security logo'),
    }),
    dreamshot: new AllProjects ({
        linkFrame: newLinkText(null, 'projects.html'),
        projectName: 'Dreamshot',
        background: newImage('img/dreamshot-background-OG.png', null, 'all-projects-background-img', ''),
        image: newImage('img/dreamshot-mig-kamera-bred.png', null, null, ''),
        decoration: newImage('img/dreamshot-round-logo.png', null, null, ''),
    }),
    verninge: new AllProjects ({
        linkFrame: newLinkText(null, 'projects.html'),
        projectName: 'Verninge',
        background: newImage('img/verninge-baggrund2.png', null, 'all-projects-background-img', ''),
        image: newImage('img/verninge-forsidebillede.png', null, null, 'photo of family for the Verninge project'),
        decoration: newImage('img/verninge-logo.png', null, null, 'logo created for Verninge'),
    }),
    webAccessibility: new AllProjects ({
        linkFrame: newLinkText(null, 'projects.html'),
        projectName: 'Web accessibility',
        background: newImage('img/Accessibility.png', null, 'all-projects-background-img', ''),
        image: newTextElement('p', 'This project was as dry as it looks.'),
        decoration: null,
    }),
    greywolf: new AllProjects ({
        linkFrame: newLinkText(null, 'projects.html'),
        projectName: 'Grey Wolf',
        background: newImage('img/greywolf.png', null, 'all-projects-background-img', ''),
        image: newImage('img/greywolf-noadean.png', null, null, 'photo of surfer doing an air'),
        decoration: newImage('img/greywolf-jordy.png', null, null, 'photo of professional surfer'),
    }),
}
const allProjectsArray = Object.values(allProjectsInstances);

const createAllProjects = () => {
    const allProjectsSection = newSection('all-projects');
        const allProjectsHeader = document.createElement('h2');
        allProjectsHeader.innerHTML = 'all projects';
        const allProjectsContainer = newDiv('all-projects-container', null);
            
            allProjectsArray.forEach(projectInstance => {
                const projectElement = projectInstance.renderAllProjects();
                allProjectsContainer.append(projectElement); 
            });
        
    allProjectsSection.append(allProjectsHeader, allProjectsContainer);
    main.append(allProjectsSection);
}

// PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE
// PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE
// PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE - PROJECTS PAGE
class Project extends Projects {
    constructor(params) {
        super(params);
    }
    renderSection() {
        const section = newSection('project-section');
        return section;
    }

    renderBackground() {
        const backgroundContainer = newDiv('project-background-container', '');
        backgroundContainer.append(this.background);
        return backgroundContainer;
    }

    renderText() {
        const textContainer = newDiv('text-container');
        const title = newTextElement('h2', this.projectName);
        // const title = document.createElement('h2');
        // title.innerHTML = this.projectName;
        const subtitle = newTextElement('h4', this.client);
        // const subtitle = document.createElement('h4');
        // subtitle.innerHTML = this.client;
        const projectDate = newTextElement('h4', `Date: ${this.date}`);
        // const projectDate = document.createElement('h4');
        // projectDate.innerHTML = `date: ${this.date}`;
        const projectDetails = newTextElement('p', this.details);
        //const projectDetails = newParagraph(this.details);
        textContainer.append(title, subtitle, projectDate, projectDetails);
        return textContainer;
    }

    renderIllustration() {
        const illustrationsContainer = newDiv('image-parent-container');

        // Image
        const projectLinkFrame = this.linkFrame;
            const leftIllustrationContainer = newDiv('image-child-container-left');
            leftIllustrationContainer.append(this.decoration);
        projectLinkFrame.append(leftIllustrationContainer);
        illustrationsContainer.append(projectLinkFrame);

        return illustrationsContainer;
    }
}

const projectContent = {
    woodwatch: new Project({
        background: newImage('img/woodwatch-forfra.png', '', '', ''),
        projectName: 'WoodWatch',
        client: 'This project was carried out as part of a rebranding of the product "FireFly" by the company: gate 3 Aps.',
        date: '2024',
        details: 'The Woodwatch project focused on re-branding a product and launching a new website, incorporating those new brand values in the design. It was a client requirement to have the website built in a CMS system, hence why we\'ve built this website using WordPress. In this project I focused on creating visuals such as logos, brand guide, colors, images etc. with Adobe Photoshop, Illustrator and InDesign. Follow the link below to see what the design looks like. Note that this was a project done as a project requested by school, hence why certain functionalities are limited to their visual representation.',
        decoration: newImage('img/woodwatch-screenshot.png', 'project-screenshot', '', ''),
        linkFrame: newLinkText(null, '#', 'project-img-link'),
    }),
    dreamshot: new Project({
        background: newImage('img/dreamshot-background-OG.png', '', '', ''),
        projectName: 'Dreamshot',
        client: 'This school project was focused on creating brand values for a made up company and communicating them visually on a website.',        
        date: '2024',
        details: 'Dreamshot is a made-up company. The task was to communicate brand values visually through photography, editing, graphics designs, colors, fonts, web-banners, video etc. In this project I focused on the actual brand and put a great effort into creating a brand guide in Adobe InDesign. The photos are edited with Adobe Photoshop and Illustrator. The video is edited using Adobe PremierePro. It\'s a funny video. You should follow the website link and watch it. The project is coded using mainly HTML and SCSS, as the project focused on more graphics creativity than coding ability.',
        decoration: newImage('img/dreamshot-screenshot.png', 'project-screenshot', '', 'screenshot from website'),
        linkFrame: newLinkText(null, '#', 'project-img-link'),
    }),
};

class ProjectLinks {
    constructor({ cta }) {
        this.cta = cta;
    }
    static renderLinksContainer() {
        const linkContainer = newDiv('link-container');
        return linkContainer;
    }
    renderLinks() {
        this.cta.classList.add('cta');
        return this.cta;
    }
}

const projectLinksObject = {
    woodwatch: {
        downloadCTA: new ProjectLinks({
            cta: newLinkText('download brand guide', '#', ''),
        }),
        githubCTA: new ProjectLinks({
            cta: newLinkText('go to GitHub', '#', ''),
        }),
        websiteCTA: new ProjectLinks({
            cta: newLinkText('go to website', 'https://mothasmilk.com/woodwatch/', ''),
        }),
    },
    dreamshot: {
        downloadCTA: new ProjectLinks({
            cta: newLinkText('download brand guide', '#', ''),
        }),
        githubCTA: new ProjectLinks({
            cta: newLinkText('go to GitHub', '#', ''),
        }),
        websiteCTA: new ProjectLinks({
            cta: newLinkText('go to website', 'https://mothasmilk.com/dreamshot-media/index.html', ''),
        }),
    },
};

const createProject = () => {
    Object.keys(projectContent).forEach(projectKey => { //bruger keys til at matche de to objecter
        const project = projectContent[projectKey];

        const section = project.renderSection(); 

        // const section = newSection('project-section'); 
            const background = project.renderBackground();
            const text = project.renderText();
        const illustration = project.renderIllustration();

        section.append(background, text, illustration);

        const projectLinks = projectLinksObject[projectKey];
        if (projectLinks) {
            const linksContainer = ProjectLinks.renderLinksContainer();
            Object.values(projectLinks).forEach(linkInstance => {
                const cta = linkInstance.renderLinks();
                linksContainer.append(cta);
            });
            section.append(linksContainer);
        }

        main.append(section);
    });
};


//EXECUTE - EXECUTE - EXECUTE - EXECUTE - EXECUTE - EXECUTE - EXECUTE
switch(true) {
    case title === 'Home page':
        createHighlightedProjects();
        createAllProjects();
    break;
    case title === 'Projects page':
        createProject();
    break;
    case title === 'About page':
        
    break;
}
