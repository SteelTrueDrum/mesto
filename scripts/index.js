const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupProfile = document.querySelector('.popup_profile');
const popupAddElem = document.querySelector('.popup_addElem');
const popupPreview = document.querySelector('.popup_preview');
const popupCloseButton = document.querySelectorAll('.popup__close-btn');
const popupProfileName = popupProfile.querySelector('.popup__profile-name');
const popupProfileAbout = popupProfile.querySelector('.popup__profile-about');
const popupElemName = popupProfile.querySelector('.popup__elem-name');
const popupElemLink = popupProfile.querySelector('.popup__elem-link');
const popupSaveButton = popupProfile.querySelector('.popup__save-btn');
const profileTitle = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__about');
const profileEditButton = document.querySelector('.profile__edit-btn');
const profileAddButton = document.querySelector('.profile__add-btn');
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');
const popupFormAddElem = document.querySelector('.popup__form-addElem');

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openProfile() {
  openPopup(popupProfile);
  popupProfileName.value = profileTitle.textContent;
  popupProfileAbout.value = profileAbout.textContent;
}

function closeProfile() {
  closePopup(popupProfile);
}

function openAddElem() {
  openPopup(popupAddElem);
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  closePopup(popupProfile);
}

function addCard() {

}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  closePopup(popupProfile);
}

function addElemHandler(evt) {
  evt.preventDefault();

  closePopup(popupAddElem);
}

profileAddButton.addEventListener('click', openAddElem);
profileEditButton.addEventListener('click', openProfile);
// popupCloseButton.addEventListener('click', closeProfile);
popupFormProfile.addEventListener('submit', formSubmitHandler);
popupFormAddElem.addEventListener('submit', addElemHandler);


popupCloseButton.forEach((i) => {i.addEventListener("click", () => closePopup(i.closest(".popup_opened")));});

