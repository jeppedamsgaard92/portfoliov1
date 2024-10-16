
const createLayout = () => {
    const backgroundContainer = newDiv('fixed-background', null);
    const backgroundImage = newImage('img/red-wall.png', 'background-img', null, null);
    backgroundContainer.appendChild(backgroundImage);
    
    const foregroundContainer = newDiv('fixed-foreground', null);
    const foregroundImage = newImage('img/shadow-layer.png', 'foreground-img', null, null);
    foregroundContainer.appendChild(foregroundImage);

    document.body.appendChild(backgroundContainer);
    document.body.appendChild(foregroundContainer);
}
createLayout();