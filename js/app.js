function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  } else {
    document.getElementById('menu').style.borderRadius = '0px';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const slide = document.querySelector('.slide');
  const indicatorsContainer = document.querySelector('.indicators');
  let currentIndex = 0;

  function showSlide(index) {
      const newPosition = -index * 100 + '%';
      carousel.style.transform = 'translateX(' + newPosition + ')';

      // Atualiza os indicadores
      const indicators = document.querySelectorAll('.indicator');
      indicators.forEach((indicator, i) => {
          indicator.classList.toggle('active', i === index);
      });
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % 4;
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + 4) % 4;
      showSlide(currentIndex);
  }

  let intervalId = setInterval(nextSlide, 10000); 

  // Adiciona indicadores dinamicamente
  for (let i = 0; i < 4; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicator.addEventListener('click', function () {
          currentIndex = i;
          showSlide(currentIndex);
      });
      indicatorsContainer.appendChild(indicator);
  }
  document.querySelector('.carousel-container').addEventListener('focus', function () {
      clearInterval(intervalId);
  });
  document.querySelector('.carousel-container').addEventListener('focus', function () {
      intervalId = setInterval(nextSlide, 10000);
  });
  document.querySelector('.Left').addEventListener('click', function () {
    prevSlide();
  });
  document.querySelector('.Right').addEventListener('click', function () {
    nextSlide();
  });
});
