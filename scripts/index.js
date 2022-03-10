let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close-btn');
let popupProfileName = popup.querySelector('.popup__input_name');
let popupProfileAbout = popup.querySelector('.popup__input_about');
let popupSaveButton = popup.querySelector('.popup__save-btn');
let profileTitle = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__about');
let profileEditButton = document.querySelector('.profile__edit-btn');
let popupForm = popup.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('popup_opened');
  popupProfileName.value = profileTitle.textContent;
  popupProfileAbout.value = profileAbout.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  closePopup();
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);
