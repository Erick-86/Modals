const showModalBnts = document.querySelectorAll(".show-modal");
const overLay = document.getElementById("overlay");
const modal = Array.from(document.querySelectorAll(".modal-container"));
const closeModal = Array.from(document.querySelectorAll(".close-btn"));

//Showing and Hiding Modal function
//Showing
const showModal = function (index) {
  modal[index].style.display = "block";
  overLay.style.display = "block";
};

//Hiding
const hideModal = function (index) {
  modal[index].style.display = "none";
  overLay.style.display = "none";
};

for (let i = 0; i < showModalBnts.length; i++) {
  const index = Number(showModalBnts[i].dataset.index);
  showModalBnts[i].addEventListener("click", () => showModal(index));
  closeModal[index].addEventListener("click", () => hideModal(index));
  overLay.addEventListener("click", () => hideModal(index));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal[index].style.display === 'block') hideModal(index);
  });
}

// for (let y = 0; y < modal.length; y++) {
//   showModalBnts[y].addEventListener("click", showModal);
// }
