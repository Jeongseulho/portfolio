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
    top: aboutSectionTopLocation,
    behavior: 'smooth',
  });
});

document.querySelector('.go-skill').addEventListener('click', function () {
  const aboutSectionTopLocation = document.querySelector('.skill').offsetTop;
  window.scrollTo({
    top: aboutSectionTopLocation,
    behavior: 'smooth',
  });
});

document.querySelector('.go-project').addEventListener('click', function () {
  const aboutSectionTopLocation = document.querySelector('.project').offsetTop;
  window.scrollTo({
    top: aboutSectionTopLocation,
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
