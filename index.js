(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-button]"),
    closeModalBtn_1: document.querySelector("[data-menu-close-1]"),
    closeModalBtn_2: document.querySelector("[data-menu-close-2]"),
    closeModalBtn_3: document.querySelector("[data-menu-close-3]"),
    closeModalBtn_4: document.querySelector("[data-menu-close-4]"),
    closeModalBtn_5: document.querySelector("[data-menu-close-5]"),
    modal: document.querySelector("[data-menu]"),
    modal_btn: document.querySelector("[data-button]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn_1.addEventListener("click", toggleModal);
    refs.closeModalBtn_2.addEventListener("click", toggleModal);
    refs.closeModalBtn_3.addEventListener("click", toggleModal);
    refs.closeModalBtn_4.addEventListener("click", toggleModal);
    refs.closeModalBtn_5.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    refs.modal_btn.classList.toggle("is-open");
  }
})();