const downArrowBtn = document.querySelector('.down-arrow-btn');
downArrowBtn.addEventListener('click', function () {
  const aboutSectionTopLocation = document.querySelector('.about-me').offsetTop;
  window.scrollTo({
    top: aboutSectionTopLocation - 50,
    behavior: 'smooth',
  });
});
