
let HTML = ``;

capybaras.forEach((capybara) => {
    

    HTML += `
    <div class="capy-class-container js-capy-class-container">
        <div class="" data-name="${capybara.name}">
            <img class="capy-class-image" src="resources/capybaras/${capybara.image}"/>
            <div class="capy-informations-popup js-capy-informations-popup-${capybara.name} ">
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

capybaraClasses.forEach((class) => {
    class.addEventListener()
})
