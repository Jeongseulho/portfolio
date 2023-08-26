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
    const index = Array.from(e.currentTarget.children).indexOf(e.target);
    showTab(index);
  }
});

function showTab(index) {
  const panels = document.querySelectorAll('.tab-panel');
  const images = document.querySelectorAll('.tab-menu img');

  panels.forEach((panel, i) => {
    if (i === index) panel.classList.add('active');
    else panel.classList.remove('active');
  });

  images.forEach((img, i) => {
    if (i === index) img.classList.add('active');
    else img.classList.remove('active');
  });
}
