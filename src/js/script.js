$(document).ready(function () {
  // Tabs
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        if (item === '.catalog-item__link') {
          $('.catalog-item__list').eq(i).addClass('catalog-item__list_active');
        } else if (item === '.catalog-item__back') {
          $('.catalog-item__list').eq(i).removeClass('catalog-item__list_active');
        }
      })
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modal
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn(400);
  });

  $('.button_small').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn(400);
    })
  });

  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut(400);
  });

  $(window).on('click', function (e) {
    if (e.target.classList.contains('overlay')) {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    }
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {   // esc
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    }
  });

  // Validate
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите как минимум {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  // Mask
  $('input[name=phone]').mask("+7 (999) 999-99-99").on('click', function () {
    if ($(this).val() === '+7 (___) ___-__-__') {
      $(this).get(0).setSelectionRange(4, 4);
    }
  });

  // Page-up
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.page-up').fadeIn();
    } else {
      $('.page-up').fadeOut();
    }
  });
});

// Slider
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  navPosition: 'bottom',
  navAsThumbnails: true,
  controls: false,
  speed: 700
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});