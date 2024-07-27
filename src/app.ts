'use strict';

const switcher: Element = document.querySelector('.btn');

switcher.addEventListener('click', function(): void {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className: string = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});