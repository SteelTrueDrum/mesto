// начальные элементы
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Архангельская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
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
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// создание переменных из элементов
const popupProfile = document.querySelector('.popup_profile');
const popupAddElem = document.querySelector('.popup_addElem');
const popupPreview = document.querySelector('.popup_preview');
const popupCloseButton = document.querySelectorAll('.popup__close-btn');
const popupProfileName = popupProfile.querySelector('.popup__profile-name');
const popupProfileAbout = popupProfile.querySelector('.popup__profile-about');
const popupElemName = document.querySelector('.popup__elem-name');
const popupElemLink = document.querySelector('.popup__elem-link');
const popupSaveButton = popupProfile.querySelector('.popup__save-btn');
const profileTitle = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__about');
const profileEditButton = document.querySelector('.profile__edit-btn');
const profileAddButton = document.querySelector('.profile__add-btn');
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');
const popupFormAddElem = document.querySelector('.popup__form-addElem');
const elementTemplate = document.querySelector('#template');
const elements = document.querySelector('.elements');
const previewImg = document.querySelector('.popup__elem-img');
const imgCaption = document.querySelector('.popup__elem-caption');

function addElement(elem) {
  // клонируем содержимое тега template
  const element = elementTemplate.content.cloneNode(true);
  // наполняем содержимым
  const elemImg = element.querySelector('.element__img');
  elemImg.src = elem.link;
  elemImg.alt = elem.name;
  element.querySelector('.element__title').textContent = elem.name;
  // кнопка лайка
  const likeButton = element.querySelector('.element__like-btn');
  likeButton.addEventListener('click', likeElem);

  // кнопка удаления
  const delButton = element.querySelector('.element__del-btn');
  delButton.addEventListener('click', removeElem);

  // превью
  elemImg.addEventListener('click', () => {
    previewImg.src = elem.link;
    previewImg.alt = elem.name;
    imgCaption.textContent = elem.name;
    openPopup(popupPreview);
  });

  return element;
};

// фунцкия лайка
function likeElem(evt) {
  evt.target.classList.toggle('element__like-btn_active');
};

// функция удаления
function removeElem(evt) {
  const elem = evt.currentTarget.closest('.element');
  elem.remove();
};

// добавление начальных карточек
initialCards.forEach(function(elem) {
  elements.append(addElement(elem));
});

// фунцкия открытия попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

// // фунцкия закрытия попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function openProfile() {
  openPopup(popupProfile);
  popupProfileName.value = profileTitle.textContent;
  popupProfileAbout.value = profileAbout.textContent;
};

function closeProfile() {
  closePopup(popupProfile);
}

function openAddElem() {
  openPopup(popupAddElem);
};

// сохранение профайла
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  closePopup(popupProfile);
};

// функция добавление нового элемента
function addElemHandler(evt) {
  evt.preventDefault();
  const newElem = {};
  newElem.name = popupElemName.value;
  newElem.link = popupElemLink.value;
  elements.prepend(addElement(newElem));
  closePopup(popupAddElem);
};

// обработка кнопок закрытия окон
popupCloseButton.forEach((i) => {i.addEventListener("click", () => closePopup(i.closest(".popup_opened")));});

// слушатели
profileAddButton.addEventListener('click', openAddElem);
profileEditButton.addEventListener('click', openProfile);
popupFormProfile.addEventListener('submit', formSubmitHandler);
popupFormAddElem.addEventListener('submit', addElemHandler);

