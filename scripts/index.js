console.log('test');
let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close-btn');
let popupProfileName = popup.querySelector('.popup__profile-name');
let popupProfileAbout = popup.querySelector('.popup__profile-about');
let popupSaveButton = popup.querySelector('.popup__save-btn');
let profileTitle = document.querySelector('.profile__title');
let profileEditButton = document.querySelector('.profile__edit-btn');

function togglePopup() {
  popup.classList.toggle('popup_opened');
};

profileEditButton.addEventListener('click', togglePopup);

popupCloseButton.addEventListener('click', togglePopup);

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
}

popup.addEventListener('submit', formSubmitHandler);
