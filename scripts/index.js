// создание переменных из элементов
const popupProfile = document.querySelector('.popup_profile');
const popupAddElem = document.querySelector('.popup_add-elem');
const popupPreview = document.querySelector('.popup_preview');
const popupCloseButtons = document.querySelectorAll('.popup__close-btn');
const popupProfileName = popupProfile.querySelector('.popup__profile-name');
const popupProfileAbout = popupProfile.querySelector('.popup__profile-about');
const popupElemName = document.querySelector('.popup__elem-name');
const popupElemLink = document.querySelector('.popup__elem-link');
const popupSaveButton = popupProfile.querySelector('.popup__save-btn');
const popupAddElemSaveBtn = popupAddElem.querySelector('.popup__save-btn');
const profileTitle = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__about');
const profileEditButton = document.querySelector('.profile__edit-btn');
const profileAddButton = document.querySelector('.profile__add-btn');
const popupFormProfile = popupProfile.querySelector('.popup__form-profile');
const popupFormAddElem = document.querySelector('.popup__form-add-elem');
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
  evt.currentTarget.closest('.element').remove();
};

// добавление начальных карточек
initialCards.forEach(function(elem) {
  elements.append(addElement(elem));
});

// фунцкия открытия попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscKey);
  document.addEventListener('mousedown', handleOverlayClick);
};

// фунцкия закрытия попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscKey);
  document.removeEventListener('mousedown', handleOverlayClick);
};

function openProfile() {
  popupProfileName.value = profileTitle.textContent;
  popupProfileAbout.value = profileAbout.textContent;
  openPopup(popupProfile);
};

function closeProfile() {
  closePopup(popupProfile);
}

function openAddElementPopup() {
  openPopup(popupAddElem);
};

// функция закрытия попап по клавише Esc
function closeByEscKey(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
};

// функция закрытия попап по клику мыши на оверлей
function handleOverlayClick(evt) {
  if(evt.target.classList.contains('popup')){
    closePopup(document.querySelector('.popup_opened'));
  };
};

// сохранение профайла
function handleSubmitForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupProfileName.value;
  profileAbout.textContent = popupProfileAbout.value;
  closePopup(popupProfile);
};

// функция добавление нового элемента
function addElemHandler(evt) {
  evt.preventDefault();
  elements.prepend(addElement({name: popupElemName.value, link: popupElemLink.value}));
  // сброс формы и блокировка кнопки
  popupAddElemSaveBtn.setAttribute('disabled', 'disabled');
  popupAddElemSaveBtn.classList.add('popup__save-btn_inactive');
  popupFormAddElem.reset();
  closePopup(popupAddElem);
};

// обработка кнопок закрытия окон
popupCloseButtons.forEach((btnClose) => {btnClose.addEventListener('click', () => closePopup(btnClose.closest('.popup_opened')));});

// слушатели
profileAddButton.addEventListener('click', openAddElementPopup);
profileEditButton.addEventListener('click', openProfile);
popupFormProfile.addEventListener('submit', handleSubmitForm);
popupFormAddElem.addEventListener('submit', addElemHandler);

