const arrowBtn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');
const img = document.querySelector('.item1');

const showImg = () => {
  img.classList.toggle('hide');
  arrowIcon.classList.toggle('transform');
};

arrowBtn.addEventListener('click', showImg);
