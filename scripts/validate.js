// Функция, которая добавляет класс с ошибкой и текст ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('input-error_active');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('input-error_active');
};

// Функция проверяет валидность
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // Передаем текст ошибки третьим аргументом
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// принимает массив полей формы и возвращает true, если хотя бы одно поле не валидно, и false - все валидны.
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-btn_inactive');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('popup__save-btn_inactive');
    buttonElement.removeAttribute('disabled', 'disabled');
  }
};

const setEventListeners = (formElement) => {
  // Находим все поля внутри формы, делаем из них массив
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector('.popup__save-btn');
  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid, передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);
      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM и сделаем из них массив
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });
  // Для каждой формы вызовем setEventListeners, передав ей элемент формы
    setEventListeners(formElement);
  });
};

enableValidation();
