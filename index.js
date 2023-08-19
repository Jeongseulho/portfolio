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

function showTab(index) {
  const panels = document.querySelectorAll('.tab-panel');
  panels.forEach((panel, i) => {
    panel.style.display = i === index ? 'block' : 'none';
  });
}
