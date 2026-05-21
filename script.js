(function () {
  const lightbox = document.getElementById('machineLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeButton = document.getElementById('lightboxClose');
  const machineImages = document.querySelectorAll('.machine-card img');

  if (!lightbox || !lightboxImage || !lightboxCaption || !closeButton || machineImages.length === 0) {
    return;
  }

  function openLightbox(img) {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || 'Imagem da máquina';
    lightboxCaption.textContent = img.alt || 'Imagem da máquina';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    document.body.style.overflow = '';
  }

  machineImages.forEach((img) => {
    img.addEventListener('click', () => openLightbox(img));
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
})();
