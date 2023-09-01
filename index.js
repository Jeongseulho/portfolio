document.querySelector('.go-home').addEventListener('click', function () {
  const aboutSectionTopLocation = document.querySelector('.home').offsetTop;
  window.scrollTo({
    top: aboutSectionTopLocation - 50,
    behavior: 'smooth',
  });
});

document.querySelector('.go-education').addEventListener('click', function () {
  const aboutSectionTopLocation =
    document.querySelector('.education').offsetTop;
  window.scrollTo({
    top: aboutSectionTopLocation - 50,
    behavior: 'smooth',
  });
});

document.querySelector('.go-skill').addEventListener('click', function () {
  const aboutSectionTopLocation = document.querySelector('.skill').offsetTop;
  window.scrollTo({
    top: aboutSectionTopLocation - 50,
    behavior: 'smooth',
  });
});

document.querySelector('.go-project').addEventListener('click', function () {
  const aboutSectionTopLocation = document.querySelector('.project').offsetTop;
  window.scrollTo({
    top: aboutSectionTopLocation - 50,
    behavior: 'smooth',
  });
});

document.querySelector('.go-blog').addEventListener('click', function () {
  const aboutSectionTopLocation = document.querySelector('.blog').offsetTop;
  window.scrollTo({
    top: aboutSectionTopLocation - 50,
    behavior: 'smooth',
  });
});

document.querySelector('.tab-menu').addEventListener('click', function (e) {
  if (e.target.tagName.toLowerCase() === 'img') {
    const parentDiv = e.target.closest('.img-wrapper');
    const index = Array.from(
      e.currentTarget.querySelectorAll('.img-wrapper'),
    ).indexOf(parentDiv);

    // 화살표 아이콘의 위치를 변경
    const arrowIcon = document.querySelector('.arrow-icon');
    const targetTop =
      parentDiv.offsetTop +
      parentDiv.offsetHeight / 2 -
      arrowIcon.offsetHeight / 2;
    arrowIcon.style.top = `${targetTop}px`;

    showTab(index);
  }
});

function showTab(index) {
  const panels = document.querySelectorAll('.tab-panel');
  const imgWrapper = document.querySelectorAll('.tab-menu .img-wrapper');
  const images = document.querySelectorAll('.tab-menu img-wrapper img');

  panels.forEach((panel, i) => {
    if (i === index) panel.classList.add('active');
    else panel.classList.remove('active');
  });

  imgWrapper.forEach((img, i) => {
    if (i === index) img.classList.add('active');
    else img.classList.remove('active');
  });

  images.forEach((img, i) => {
    if (i === index) img.classList.add('active');
    else img.classList.remove('active');
  });
}
