  const initialElements = [{
          name: 'Yosemite Valley',
          link: 'https://code.s3.yandex.net/web-code/yosemite.jpg',
      },
      {
          name: 'Lake Louise',
          link: 'https://code.s3.yandex.net/web-code/lake-louise.jpg',
      },
      {
          name: 'Bald Mountains',
          link: 'https://code.s3.yandex.net/web-code/bald-mountains.jpg',
      },
      {
          name: 'Latemar',
          link: 'https://code.s3.yandex.net/web-code/latemar.jpg',
      },
      {
          name: 'Vanoise National Park',
          link: 'https://code.s3.yandex.net/web-code/vanoise.jpg',
      },
      {
          name: 'Lago di Braies',
          link: 'https://code.s3.yandex.net/web-code/lago.jpg',
      },
  ];


  // popup

  const nameInput = document.querySelector('.popup__inputs-type-name');
  const aboutInput = document.querySelector('.popup__inputs-type-description');
  const editPopupForm = document.querySelector('.popup__inputs-container');
  const editPopupFormAddPlace = document.querySelector(
      '.popup__inputs-container-addPlace',
  );

  const editModeName = document.querySelector('.profile__edit');
  const addPlaceBtn = document.querySelector('.profile__add');
  //elements
  const cardSelector = '.element-Stracture';
  const elements = document.querySelector('.elements');
  const elementList = elements.querySelector('.elements__list');
  //image preview

  //avatar img
  const avatarImage = document.querySelector('.profile__img-container');

  // imgs
  const logoImg = document.querySelector('.header__logo');
  const theprofileImg = document.querySelector('.profile__img');
  const validationSettings = {
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__submit-button',
      inactiveButtonClass: 'popup__button_disabled',
      inputErrorClass: 'popup__input-error',
      errorClass: 'popup__error_visible',
  };
  // end of imgs 
  //popup functions

  export {
      initialElements,
      nameInput,
      aboutInput,
      editPopupForm,
      editPopupFormAddPlace,
      editModeName,
      addPlaceBtn,
      cardSelector,
      elements,
      elementList,
      logoImg,
      theprofileImg,
      validationSettings,
      avatarImage
  }