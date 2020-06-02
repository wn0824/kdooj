const simpleTestContent = document.querySelector('.content');

function makeBtn() {
    const makeButton = document.createElement('button');
    makeButton.innerHTML = 'Question!';
    simpleTestContent.appendChild(makeButton);
}


function init() {
    const ul = document.createElement('ul');
    simpleTestContent.appendChild(ul);
    makeBtn();
}

init();