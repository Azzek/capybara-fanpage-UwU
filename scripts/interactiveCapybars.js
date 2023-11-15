
let HTML = ``;
let showCapibaraHTML = ``;


capybaras.forEach((capybara) => {
    

    HTML += `
    <div class="capy-class-container js-capy-class-container" data-capi-id="${capybara.name}">
        <div class="" >
            <img class="capy-class-image" src="resources/capybaras/${capybara.image}" data-capi-id="${capybara.name}"/>
        </div>
        <div class="capy-class-description">
            <div class="capy-name">
                <span>${capybara.name}</span>
            </div>
            <span>\</span>
        </div>
    </div>`;

    showCapibaraHTML += `
                <div class="capy-informations-popup js-capy-informations-popup-${formatCapyNames(capybara.name)}">
                    <img src="resources/capybaras/${capybara.image}"/>
                    <h1>${capybara.name}</h1>
                    <span>${capybara.description}</span>
                </div>`
})
document.querySelector('.capibara-classes').innerHTML = HTML;
document.querySelector('.show-chosen-capibara').innerHTML = showCapibaraHTML;



let oldCapybara  = 'gamer-Capybara';

const capybaraClasses = document.querySelectorAll('.capy-class-container')

capybaraClasses.forEach((capyClass) => {

    capyClass.addEventListener('click', () => {
        if (localStorage.getItem('chosenCapibara')) {
          document.querySelector(`.js-capy-informations-popup-${JSON.parse(localStorage.getItem('chosenCapibara'))}`).classList.remove('displayBlock', 'active') 
        }
        const classId = capyClass.dataset.capiId
        
       const popup = document.querySelector(`.js-capy-informations-popup-${formatCapyNames(classId)}`)
       popup.classList.toggle('displayBlock');
       popup.classList.toggle('active');
       

       

       if(oldCapybara  !== classId){
       const popupOld = document.querySelector(`.js-capy-informations-popup-${formatCapyNames(oldCapybara )}`)
       popupOld.classList.remove('displayBlock');
       popupOld.classList.remove('active');
    }
    oldCapybara = classId;

    saveCapybaraToLocalStorage(classId)
    })


    
})


    

    

function formatCapyNames(capyName) {
    return capyName.replace(/ /g, "-");
}

function saveCapybaraToLocalStorage(classId) {
    localStorage.setItem('chosenCapibara', JSON.stringify(formatCapyNames(classId)))
    console.log(localStorage.getItem('chosenCapibara'))
}