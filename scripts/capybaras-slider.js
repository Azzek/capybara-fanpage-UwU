
let HTML = ``;

capybaras.forEach((capybara) => {
    

    HTML += `
    <div class="capy-class-container js-capy-class-container" data-capi-id="${capybara.name}">
        <div class="" >
            <img class="capy-class-image" src="resources/capybaras/${capybara.image}" data-capi-id="${capybara.name}"/>
            <div class="capy-informations-popup js-capy-informations-popup-${formatCapyNames(capybara.name)}">
                <img src="resources/capybaras/${capybara.image}"/>
                <h1>${capybara.name}</h1>
                <span>${capybara.description}</span>
            </div>
        </div>
        <div class="capy-class-description">
            <div class="capy-name">
                <span>${capybara.name}</span>
            </div>
            <span>\</span>
        </div>
    </div>`;

    
})
document.querySelector('.capibara-classes').innerHTML = HTML;


const capybaraClasses = document.querySelectorAll('.capy-class-container')

let isSomePopup = 'gamer-Capybara';
capybaraClasses.forEach((capyClass) => {

    capyClass.addEventListener('click', () => {

        
      
        const classId = capyClass.dataset.capiId
        
       const popup = document.querySelector(`.js-capy-informations-popup-${formatCapyNames(classId)}`)
       popup.classList.toggle('displayNone');

       

       if(isSomePopup !== classId){
        document.querySelector(`.js-capy-informations-popup-${formatCapyNames(isSomePopup)}`).classList.remove('displayNone');
        console.log(isSomePopup)
        
    }
    isSomePopup = classId;
    })


    
})


function formatCapyNames(capyName) {
    return capyName.replace(/ /g, "-");
}