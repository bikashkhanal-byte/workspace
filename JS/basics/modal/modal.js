// Get elements
const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.querySelector(".close");

// Open modal
openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when clicking on 'x'
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
