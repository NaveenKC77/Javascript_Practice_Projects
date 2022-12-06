function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}


class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];
    this.modal = getElement(".modal");
    this.mainImg = getElement(".main-img");
    this.imgName = getElement(".image-name");
    this.modalImages = getElement(".modal-images");
    this.closeBtn = getElement(".close-btn");
    this.prevBtn = getElement(".prev-btn");
    this.nextBtn = getElement(".next-btn");

    //binding functions
    this.closeModal = this.closeModal.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.chooseImg = this.chooseImg.bind(this);

    this.container.addEventListener('click',
      function(e) {
        if (e.target.classList.contains("img")) {
          this.openModal(e.target, this.list);
        }
      }.bind(this));



  }

  openModal(selectedImage, list) {
    this.setMainImg(selectedImage);
    this.modal.classList.add("open");
    this.closeBtn.addEventListener("click", this.closeModal);
    this.prevBtn.addEventListener('click', this.prevImg);
    this.nextBtn.addEventListener('click', this.nextImg);
    this.modalImages.addEventListener('click', this.chooseImg);

    this.modalImages.innerHTML = this.list.map(function(image) {
      return `  <img
            src=${image.src}
            title=${image.title}
            id=${image.dataset.id}
            class="${image.dataset.id==selectedImage.dataset.id ? "modal-img selected" : "modal-img"} "
            alt=""
          />`
    }).join("");
  }

  closeModal() {
    this.modal.classList.remove("open");
    this.prevBtn.removeEventListener('click', this.prevImg);
    this.nextBtn.removeEventListener('click', this.nextImg);
    this.modalImages.removeEventListener('click', this.chooseImg);

  }


  setMainImg(selectedImage) {
    this.mainImg.src = selectedImage.src;
    this.imgName.textContent = selectedImage.title;
  }


  prevImg() {
    const selected = this.modalImages.querySelector(".selected");
    const prev = selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove("selected");
    prev.classList.add("selected");
    this.setMainImg(prev);
  }

  nextImg() {
    const selected = this.modalImages.querySelector(".selected");

    const next = selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove("selected");
    next.classList.add("selected");
    this.setMainImg(next);
  }

  chooseImg(e) {
    if (e.target.classList.contains('modal-img')) {
      const selected = this.modalImages.querySelector(".selected");
      selected.classList.remove("selected");

      this.setMainImg(e.target);
      e.target.classList.add("selected");
    }

  }

}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
