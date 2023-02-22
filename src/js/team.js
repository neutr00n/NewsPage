
let openModalBtn = document.querySelector(".team__btn");
let closeModalBtn = document.querySelector("[data-team-close]");
let modal = document.querySelector(".team__backdrop");

let teamCard = document.querySelector('.team-card');
let frontSide = teamCard.querySelector('.team-card__side--front');
let backSide = teamCard.querySelector('.team-card__side--back');

  openModalBtn.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);
  
  teamCard.addEventListener('click', flipCard);

  function toggleModal() {
    modal.classList.toggle("is-hidden");
}

function flipCard() {
  teamCard.classList.toggle('flipped');
}
  







