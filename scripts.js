document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('#projectsCarousel');
  const items = carousel.querySelectorAll('.carousel-item');

  items.forEach((el) => {
    const minPerSlide = 3;
    let next = el.nextElementSibling;
    for (let i = 1; i < minPerSlide; i++) {
      if (!next) {
        next = items[0];
      }
      const cloneChild = next.cloneNode(true);
      el.querySelector('.row').appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
});
