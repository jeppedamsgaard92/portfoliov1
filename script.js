
// HELPER FUNCTION      HELPER FUNCTION     HELPER FUNCTION

// GLOBAL CONSTANT      GLOBAL CONSTANT     GLOBAL CONSTANT   
const body = document.querySelector('body');

// CLASS    CLASS   CLASS   CLASS   CLASS

const pageBuilder = () => {
    const header = document.createElement('header');
    header.style.backgroundColor = 'blue';
    const main = document.createElement('main');
    main.style.backgroundColor = 'lightblue';
    const footer = document.createElement('footer');
    footer.style.backgroundColor = 'darkblue';
    
    body.append(header, main, footer);
}

// EXECUTE      EXECUTE     EXECUTE     EXECUTE

pageBuilder();