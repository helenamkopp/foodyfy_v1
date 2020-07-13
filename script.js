 
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.container');




for(let container of cards) {
    container.addEventListener("click", function(){
        let food = container.querySelector('.food').innerText;
        let author = container.querySelector('.author').innerText;
        const imageId = container.getAttribute("id")
        
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `${imageId}`;
        modalOverlay.querySelector("p.food").innerText = `${food}`;
        modalOverlay.querySelector("p.author").innerText = `${author}`;
    

    })
}

const closeModal = document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")

})