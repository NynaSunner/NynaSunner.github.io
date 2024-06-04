function filterColor(){
    const checkboxes = document.querySelectorAll('input.color');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const targetClass = this.id;
            const elements = document.querySelectorAll(`.${targetClass}`);
            
            elements.forEach(element => {
                if (this.checked) {
                    element.classList.remove('hidden');
                }
                else {
                    element.classList.add('hidden');
                }
            });
        });
    });
}

function filterText(){
    let searchInput = document.getElementById('searchbar');

    searchInput.addEventListener('keyup', () => {
        var cards = document.querySelectorAll('#card-container img, details > span, #card-names span');
        const searchText = document.getElementById("searchbar").value.toLowerCase();
        const searchTerms = searchText.split(',').map(term => term.trim());

        for (var i = 0; i < cards.length; i++){
            const cardClasses = cards[i].className.toLowerCase();
            const matches = searchTerms.some(term => cardClasses.includes(term));
            
            if (matches){
                cards[i].classList.remove("hidden-two");
            }
            else{
                cards[i].classList.add("hidden-two");
            }
        }
    });
}
