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

let slideContainer = document.getElementById('slide-inner');
let slideItems = document.querySelectorAll('.slide-item'); // ".slide-item"으로 변경
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let currentSlide = 0;

// 초기 화살표 상태 설정
function updateArrowButtons() {
  if (currentSlide === 0) {
    prevBtn.classList.remove('show');
  } else {
    prevBtn.classList.add('show');
  }

  if (currentSlide === slideItems.length - 1) {
    nextBtn.classList.remove('show');
  } else {
    nextBtn.classList.add('show');
  }
}
// 초기 상태 업데이트
updateArrowButtons();

nextBtn.addEventListener('click', function () {
  if (currentSlide < slideItems.length - 1) {
    currentSlide++;
    slideContainer.style.transform = `translateX(-${
      currentSlide * slideItems[0].offsetWidth
    }px)`;
    updateArrowButtons();
  }
});

prevBtn.addEventListener('click', function () {
  if (currentSlide > 0) {
    currentSlide--;
    slideContainer.style.transform = `translateX(-${
      currentSlide * slideItems[0].offsetWidth
    }px)`;
    updateArrowButtons();
  }
});

// 창 크기 변경에 대응
window.addEventListener('resize', function () {
  slideContainer.style.transform = `translateX(-${
    currentSlide * slideItems[0].offsetWidth
  }px)`;
});
