var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  }

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.


  if (st > lastScrollTop && st > navbarHeight) {
    $('header').removeClass('nav-down').removeClass('nav-shadow').addClass('nav-up');
  } else {
    $('header').removeClass('nav-up').addClass('nav-down').addClass('nav-shadow');
  }

  const threshold = 100;
  if (st < threshold) {
    $('header').removeClass('nav-shadow');
  }

  lastScrollTop = st;
}




// anime({
//   targets: '.nav-item',
//   translateY: [-30, 0],
//   opacity: [0, 1],
//   easing: 'easeInQuart',
//   delay: anime.stagger(120)
// });


function playInitialAnimation() {
  window.scrollTo(0, 0)

  anime({
    targets: '.logo',
    opacity: [0, 1],
    duration: 3000
  });

  var initialTimeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500
  });

  initialTimeline
    .add({
      targets: '.nav-item',
      translateY: [-30, 0],
      opacity: [0, 1],
      delay: anime.stagger(100)
    })
    .add({
      targets: 'section.welcome > *',
      translateY: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(300)
    })
    .add({
      targets: ['.side-bar-right', '.side-bar-left'],
      opacity: [0, 1],
      delay: 0,
      duration: 300,
      easing: 'linear'
    })
}

// playInitialAnimation()

