
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
                <div class="capibara-to-show js-capibara-to-show-${formatCapyNames(capybara.name)}">
                    <img src="resources/capybaras/${capybara.image}"/>
                    <h1>${capybara.name}</h1>
                    <span>${capybara.description}</span>
                </div>`
})
document.querySelector('.capibara-classes').innerHTML = HTML;
document.querySelector('.show-chosen-capibara-container').innerHTML = showCapibaraHTML;



let oldShowedCapibara  = 'gamer-Capybara';

const capybaraClasses = document.querySelectorAll('.capy-class-container')

capybaraClasses.forEach((capyClass) => {

    capyClass.addEventListener('click', () => {
        if (localStorage.getItem('chosenCapibara')) {
          document.querySelector(`.js-capibara-to-show-${JSON.parse(localStorage.getItem('chosenCapibara'))}`).classList.remove('displayBlock', 'active') 
          || confirm
        }
        const classId = capyClass.dataset.capiId
        
       const capibaraToShow = document.querySelector(`.js-capibara-to-show-${formatCapyNames(classId)}`)
       capibaraToShow.classList.toggle('displayBlock');
       capibaraToShow.classList.toggle('active');
       

       

       if(oldShowedCapibara !== classId){
            const ShowedCapibara = document.querySelector(`.js-capibara-to-show-${formatCapyNames(oldShowedCapibara)}`)
            ShowedCapibara.classList.remove('displayBlock');
            ShowedCapibara.classList.remove('active');
        }
        oldShowedCapibara = classId;

    saveCapybaraToLocalStorage(classId)
    })


    
})



    if(localStorage.getItem('chosenCapibara')) {
        document.querySelector(`.js-capibara-to-show-${JSON.parse(localStorage.getItem('chosenCapibara'))}`).classList.add('displayBlock', 'active')
    }

    

function formatCapyNames(capyName) {
    return capyName.replace(/ /g, "-");
}

function saveCapybaraToLocalStorage(classId) {
    localStorage.setItem('chosenCapibara', JSON.stringify(formatCapyNames(classId)))
    console.log(localStorage.getItem('chosenCapibara'))
}