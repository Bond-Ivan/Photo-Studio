(() => {

  const onlyLetters = /^[a-zA-Zа-яА-ЯёЁ]+$/;

  const $headerBurger = document.querySelector('.header__burger');
  const $headerMenu = document.querySelector('.header__menu');
  const $headerMenuBtn = document.querySelector('.header__menu-btn');
  const $headerLoopBtn = document.querySelector('.header__btn');
  const $headerSearch = document.querySelector('.header__search');
  const $headerTopNav = document.querySelector('.header__top-nav');
  const $headerSearchBtn = document.querySelector('.header__search-btn');

  const $contactsMapBtnClose = document.querySelector('.contacts__map-btn');
  const $contactsMapInner = document.querySelector('.contacts__map-inner');
  const $contactsFormBtn = document.querySelector('.contacts__form-btn');
  const $contactsInput = document.querySelector('.contacts__input')
  const $contactsInputElem = document.querySelector('.contacts__input-elem');
  const $contactsShowAddressBtn = document.querySelector('.contacts__show-address__btn ')

  const $aboutUsBtn = document.querySelector('.about-us__btn');
  const $aboutUsInputContainer = document.querySelector('.about-us__input');
  const $aboutUsInput = document.querySelector('.about-us__input-elem');

  $aboutUsBtn.addEventListener('click', () => {
    if (onlyLetters.test($aboutUsInput.value)) {
      if (document.querySelector('.about-us__input-error')) {
        document.querySelector('.about-us__input-error').remove();
        $aboutUsInput.removeAttribute('style', 'border-color:red');
      }
      location.reload();
    } else {
      if (document.querySelector('.about-us__input-error')) {
        document.querySelector('.about-us__input-error').remove();
      }
      const $aboutUsError = document.createElement('p');
      $aboutUsError.textContent = 'Неккоректный формат';
      $aboutUsError.classList.add('about-us__input-error');
      $aboutUsInputContainer.append($aboutUsError);
      $aboutUsInput.setAttribute('style', 'border-color:red');
    }
  })

  $contactsFormBtn.addEventListener('click', () => {
    if (onlyLetters.test($contactsInputElem.value)) {
      if (document.querySelector('.contacts__input-error')) {
        document.querySelector('.contacts__input-error').remove();
        $contactsInputElem.removeAttribute('style', 'border-color:red');
      }
      location.reload();
    } else {
      if (document.querySelector('.contacts__input-error')) {
        document.querySelector('.contacts__input-error').remove();
      }
      const $contactsError = document.createElement('p');
      $contactsError.textContent = 'Неккоректный формат';
      $contactsError.classList.add('contacts__input-error');
      $contactsInput.append($contactsError);
      $contactsInputElem.setAttribute('style', 'border-color:red');
    }
  })

  $headerBurger.addEventListener('click', () => {
    $headerMenu.classList.add('header__menu--active');
  });

  $headerMenuBtn.addEventListener('click', () => {
    $headerMenu.classList.remove('header__menu--active');
  });

  $contactsMapBtnClose.addEventListener('click', () => {
    $contactsMapInner.classList.add('contacts__map-inner--active');
    checkClassContain();
  });

  $headerLoopBtn.addEventListener('click', () => {
    $headerSearch.classList.add('header__search--active');
    $headerTopNav.classList.add('header__top-nav--active');
    $headerLoopBtn.classList.add('header__btn--active');
  })

  $headerSearchBtn.addEventListener('click', () => {
    $headerSearch.classList.remove('header__search--active');
    $headerTopNav.classList.remove('header__top-nav--active');
    $headerLoopBtn.classList.remove('header__btn--active');
  })

  function checkClassContain() {
    if ($contactsMapInner.classList.contains('contacts__map-inner--active')) {
      $contactsShowAddressBtn.classList.add('contacts__show-address__btn--active');
      $contactsShowAddressBtn.addEventListener('click', () => {
        $contactsMapInner.classList.remove('contacts__map-inner--active');
        $contactsShowAddressBtn.classList.remove('contacts__show-address__btn--active');
      })
    };
  }

})();