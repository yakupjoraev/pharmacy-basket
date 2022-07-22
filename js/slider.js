// // function sliderToCards() {
// var container = document.getElementById('slide-product-container')

// // if (!container) {
// //   return null
// // }

// var slider = document.getElementById('slide-product-body');
// var slides = document.getElementsByClassName('slide-product__card').length;
// var buttons = document.getElementsByClassName('btn-cards');


// var currentPosition = 0;
// var currentMargin = 0;
// var slidesPerPage = 0;
// var slidesCount = slides - slidesPerPage;
// var containerWidth = container.offsetWidth;
// var prevKeyActive = false;
// var nextKeyActive = true;

// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//     containerWidth = container.offsetWidth;
//     setParams(containerWidth);
// }

//   function setParams(w) {
//       if (w < 551) {
//           slidesPerPage = 1;
//       } else {
//           if (w < 901) {
//               slidesPerPage = 2;
//           } else {
//               if (w < 1101) {
//                   slidesPerPage = 3;
//               } else {
//                   slidesPerPage = 4;
//               }
//           }
//       }
//       slidesCount = slides - slidesPerPage;

//       if (currentPosition > slidesCount) {
//           currentPosition -= slidesPerPage;
//       };

//       currentMargin = - currentPosition * (100 / slidesPerPage);
//       slider.style.marginLeft = currentMargin + '%';

//       if (currentPosition > 0) {
//           buttons[0].classList.remove('inactive');
//       }

//       if (currentPosition < slidesCount) {
//           buttons[1].classList.remove('inactive');
//       }

//       if (currentPosition >= slidesCount) {
//           buttons[1].classList.add('inactive');
//       }
//   };

//   function slideLeft() {
//       if (currentPosition != 0) {
//           slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
//           currentMargin += (100 / slidesPerPage);
//           currentPosition--;
//       };

//       if (currentPosition === 0) {
//           buttons[0].classList.add('inactive');
//       }

//       if (currentPosition < slidesCount) {
//           buttons[1].classList.remove('inactive');
//       }
//   };
  
//   function slideRight() {
//       if (currentPosition != slidesCount) {
//           slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
//           currentMargin -= (100 / slidesPerPage);
//           currentPosition++;
//       };

//       if (currentPosition == slidesCount) {
//           buttons[1].classList.add('inactive');
//       }

//       if (currentPosition > 0) {
//           buttons[0].classList.remove('inactive');
//       }
//   };

//   setParams();
//   slideRight ();
//   slideLeft();

// // };

// // sliderToCards();

$('.slide-product__body').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});