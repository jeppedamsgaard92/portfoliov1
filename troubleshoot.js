class Project extends Projects {
    constructor(params) {
        super(params);
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
        const projectDate = newTextElement('h4', `date: ${this.date}`);
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

        const section = newSection('project-section'); 
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

//EXECUTE 
switch(true) {
    case title === 'Home page':
        // createHighlightedProjects();
        // createAllProjects();
    break;
    case title === 'Projects page':
        //createProject();
    break;
    case title === 'About page':
        
    break;
}