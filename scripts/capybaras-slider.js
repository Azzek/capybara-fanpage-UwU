
let HTML = ``;

capybaras.forEach((capybara) => {
    

    HTML += `
<<<<<<< HEAD
    <div class="capy-class-container js-capy-class-container" data-capi-id="${capybara.name}">
        <div class="" >
            <img class="capy-class-image" src="resources/capybaras/${capybara.image}" data-capi-id="${capybara.name}"/>
            <div class="capy-informations-popup js-capy-informations-popup-${formatCapyNames(capybara.name)}">
=======
    <div class="capy-class-container js-capy-class-container">
        <div class="" data-name="${capybara.name}">
            <img class="capy-class-image" src="resources/capybaras/${capybara.image}"/>
            <div class="capy-informations-popup js-capy-informations-popup-${capybara.name} ">
>>>>>>> 2e4f761c6af54d9d1607baf0f12e5fd97450ab3c
                <img src="resources/capybaras/${capybara.image}"/>
            </div>
        </div>
        <div class="capy-class-description">
            <div class="capy-name">
                <span>${capybara.name}</span>
            </div>
            <span>${capybara.description}</span>
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
