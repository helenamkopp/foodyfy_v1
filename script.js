 
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.container');



for(let container of cards) {
    container.addEventListener("click", function(){
        const imageId = container.getAttribute("id")
        const title = container.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `${imageId}`;
        
    

    })
}

const closeModal = document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})