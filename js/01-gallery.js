import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

createGallery();

function createGallery() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
}

galleryEl.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const onImageShow = basicLightbox.create(`<img src="${e.target.dataset.source}">`, {
    onShow() {
      window.addEventListener('keydown', onEsc);
    },

    onClose() {
      window.removeEventListener('keydown', onEsc);
    },
  });

  onImageShow.show();


  function onEsc(e) {
    if (e.code !== 'Escape') {
      return;
    }
    onImageShow.close();
  }
}

console.log(galleryItems)