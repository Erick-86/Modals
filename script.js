const showModalBnts = document.querySelectorAll(".show-modal");
const overLay = document.getElementById("overlay");
const modal = document.getElementById("modal-container");
const closeModal = document.getElementById("close-btn");

//Showing and Hiding Modal function
//Showing
const showModal = function () {
  modal.style.display = 'block'
  overLay.style.display = 'block'
}

//Hiding
const hideModal = function () {
  modal.style.display = 'none'
  overLay.style.display = 'none'
}

for (let i = 0; i < showModalBnts.length; i++){
  showModalBnts[i].addEventListener('click', showModal)
  closeModal.addEventListener('click', hideModal)
  overLay.addEventListener('click', hideModal)

  // document.addEventListener('keydown', (e) => {
  //   if(e.key === 'Escape' && !modal.classList.contains('none'))
  //   hideModal()
  // })
}