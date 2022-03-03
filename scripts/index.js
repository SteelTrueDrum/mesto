console.log('test');
let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close-btn');
let popupProfileName = popup.querySelector('.popup__profile-name');
let popupProfileAbout = popup.querySelector('.popup__profile-about');
let popupSaveButton = popup.querySelector('.popup__save-btn');
let profileTitle = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__about');
let profileEditButton = document.querySelector('.profile__edit-btn');

function togglePopup() {
  popup.classList.toggle('popup_opened');
};

profileEditButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);
popupSaveButton.addEventListener('click', togglePopup);


function formSubmitHandler (evt) {
  evt.preventDefault(); //

  profileTitle.textContent =  popupProfileName.value;
  profileAbout.textContent =  popupProfileAbout.value;
}

popupSaveButton.addEventListener('click', formSubmitHandler);
