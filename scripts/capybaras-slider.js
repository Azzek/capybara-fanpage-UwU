
let HTML = ``;

capybaras.forEach((capybara) => {
    

    HTML += `
    <div class="capy-class-container">
        <div class="capy-class-image">
            <img class="capy-class-image" src="resources/capybaras/${capybara.image}"/>
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






