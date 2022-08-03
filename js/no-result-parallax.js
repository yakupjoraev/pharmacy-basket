window.onload = function () {
    const parallax = document.querySelector('.images-parallax');
    const parallaxTwo = document.querySelector('.images-parallax-two');

//для 1
  if (parallax) {
    const parallaxLoupe = document.querySelector('.images-parallax__loupe')
    const parallaxBasket = document.querySelector('.images-parallax__basket')
    const parallaxCircleOutline = document.querySelector('.images-parallax__circle-outline')
    const parallaxCircleBig = document.querySelector('.images-parallax__circle-big')
    const parallaxCircleMiddle = document.querySelector('.images-parallax__circle-middle')
    const parallaxCircleLittle = document.querySelector('.images-parallax__circle-little')
    
    // Коэффициенты
    const forLoupe = 40;
    const forBasket = 20;
    const forCircleOutline = 30;
    const forCircleBig = 40;
    const forCircleMiddle = 40;
    const forCircleLittle = 40;

    // Скорость анимации
    const speed = 0.05;

    // Объявление переменных

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMauseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      // Передаем стили
      parallaxLoupe.style.cssText = `transform: translate(${positionX / forLoupe}%,${positionY / forLoupe}%);`;

      parallaxBasket.style.cssText = `transform: translate(${positionX / forBasket}%,${positionY / forBasket}%);`;

      parallaxCircleOutline.style.cssText = `transform: translate(${positionX / forCircleOutline}%,${positionY / forCircleOutline}%);`;

      parallaxCircleBig.style.cssText = `transform: translate(${positionX / forCircleBig}%,${positionY / forCircleBig}%);`;

      parallaxCircleMiddle.style.cssText = `transform: translate(${positionX / forCircleMiddle}%,${positionY / forCircleMiddle}%);`;

      parallaxCircleLittle.style.cssText = `transform: translate(${positionX / forCircleLittle}%,${positionY / forCircleLittle}%);`;

      requestAnimationFrame(setMauseParallaxStyle);
    }
    setMauseParallaxStyle();

    parallax.addEventListener('mousemove', function (e) {
      // Получение ширины и высоты блока
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      // Ноль по середине 
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      // Получаем проценты 
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });
  }

//для 2
  else if(parallaxTwo) {
    const parallaxDoctor = document.querySelector('.images-parallax__doctor')
    const parallaxPillRedTwo = document.querySelector('.images-parallax__pill-red-two')
    const parallaxPillRedOne = document.querySelector('.images-parallax__pill-red-one')
    const parallaxPillGreenTwo = document.querySelector('.images-parallax__pill-green-two')
    const parallaxPillGreenOne = document.querySelector('.images-parallax__pill-green-one')
    
    // Коэффициенты
    const forDoctor = 40;
    const forPillRedTwo = 20;
    const forPillRedOne = 30;
    const forPillGreenTwo = 40;
    const forPillGreenOne = 40;

    // Скорость анимации
    const speed = 0.05;

    // Объявление переменных

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMauseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      // Передаем стили
      parallaxDoctor.style.cssText = `transform: translate(${positionX / forDoctor}%,${positionY / forDoctor}%);`;

      parallaxPillRedTwo.style.cssText = `transform: translate(${positionX / forPillRedTwo}%,${positionY / forPillRedTwo}%);`;

      parallaxPillRedOne.style.cssText = `transform: translate(${positionX / forPillRedOne}%,${positionY / forPillRedOne}%);`;

      parallaxPillGreenTwo.style.cssText = `transform: translate(${positionX / forPillGreenTwo}%,${positionY / forPillGreenTwo}%);`;

      parallaxPillGreenOne.style.cssText = `transform: translate(${positionX / forPillGreenOne}%,${positionY / forPillGreenOne}%);`;

      requestAnimationFrame(setMauseParallaxStyle);
    }
    setMauseParallaxStyle();

    parallaxTwo.addEventListener('mousemove', function (e) {
      // Получение ширины и высоты блока
      const parallaxWidth = parallaxTwo.offsetWidth;
      const parallaxHeight = parallaxTwo.offsetHeight;

      // Ноль по середине 
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      // Получаем проценты 
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });
  }
};
