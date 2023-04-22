// const elementDiv = document.querySelector('.rect_div');
// const elementP = document.querySelector('.rect_p');
// const elementSpan = document.querySelector('.rect_span');

// const logTarget = (text, color) => {
//   const eventsListElem = document.querySelector('.events-list');

//   eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;

//   const clearButton = document.querySelector('.clear-btn');
//   clearButton.addEventListener('click', () => {
//     eventsListElem.innerHTML = '';
//   });
// };
// const attachHandlersBtn = document.querySelector('.attach-handlers-btn');

// attachHandlersBtn.addEventListener('click', () => {
//   elementDiv.addEventListener('click', logGreyDiv, true);
//   elementDiv.addEventListener('click', logGreenDiv);

//   elementP.addEventListener('click', logGreyP, true);
//   elementP.addEventListener('click', logGreenP);

//   elementSpan.addEventListener('click', logSpanGrey, true);
//   elementSpan.addEventListener('click', logSpanGreen);
// });

// const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
// removeHandlersBtn.addEventListener('click', () => {
//   elementDiv.removeEventListener('click', logGreyDiv, true);
//   elementDiv.removeEventListener('click', logGreenDiv);

//   elementP.removeEventListener('click', logGreyP, true);
//   elementP.removeEventListener('click', logGreenP);

//   elementSpan.removeEventListener('click', logSpanGrey, true);
//   elementSpan.removeEventListener('click', logSpanGreen);
// });

// const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
// const logGreenDiv = logTarget.bind(null, 'DIV', 'green');

// const logGreyP = logTarget.bind(null, 'P', 'grey');
// const logGreenP = logTarget.bind(null, 'P', 'green');

// const logSpanGrey = logTarget.bind(null, 'SPAN', 'grey');
// const logSpanGreen = logTarget.bind(null, 'SPAN', 'green');

// elementDiv.addEventListener('click', logGreyDiv, true);
// elementDiv.addEventListener('click', logGreenDiv);

// elementP.addEventListener('click', logGreyP, true);
// elementP.addEventListener('click', logGreenP);

// elementSpan.addEventListener('click', logSpanGrey, true);
// elementSpan.addEventListener('click', logSpanGreen);

// const tasks = [
//   { text: 'Buy milk', done: false },
//   { text: 'Pick up Tom from airport', done: false },
//   { text: 'Visit party', done: false },
//   { text: 'Visit doctor', done: true },
//   { text: 'Buy meat', done: true },
// ];

// /**
//  * @param {object[]} tasksList
//  * @return {undefined}
//  */
// const renderTasks = (tasksList) => {
//   const listItems = tasksList.map((elelm) => {
//     //li .list__item if done = true ==> .list__item_done
//     //   console.log(task);
//     const done = elelm.done ? 'list__item_done' : '';
//     const text = elelm.text;
//     const listItem = document.createElement('li');
//     listItem.setAttribute('class', `list__item ${done}`);

//     //input type="checkbox" class="list__item-checkbox
//     const inputCheckbox = document.createElement('input');
//     inputCheckbox.setAttribute('class', 'list__item-checkbox');
//     inputCheckbox.setAttribute('type', 'checkbox');
//     inputCheckbox.checked = !!done;

//     // append inputCheckbox, into listItem
//     listItem.append(inputCheckbox, text);
//     return listItem;
//   });
//   // add tasks to list
//   const list = document.querySelector('.list');
//   // list.replaceChildren(...listItems);
//   list.replaceChildren(...listItems);
// };

// renderTasks(tasks);
// export const getTitleElement = () => {
//   const titleElem = document.querySelector('.title');
//   console.dir(titleElem);
//   return titleElem;
// };

// // getTitleElement();

// export const getInputElement = () => {
//   const inputElem = document.querySelector('input[type="text"]');
//   console.dir(inputElem);
//   return inputElem;
// };

// getInputElem();

// export const getItemsList = () => {
//   const elementsList = document.querySelectorAll('.technology');
//   console.dir(elementsList);
//   return elementsList;
// };
// getItemsList();

// export const getItemsArray = () => {
//   const elementsArray = Array.from(document.querySelectorAll('.tool'));
//   console.dir(elementsArray);
//   return elementsArray;
// };
// getItemsArray();

// export const getTitle = () => {
//   const titleElem = document.querySelector('.title');
//   return titleElem.textContent;
// };
// // console.log(getTitle());

// export const getDescription = () => {
//   const descriptElem = document.querySelector('.about');
//   return descriptElem.innerText;
// };
// // console.log(getDescription());

// export const getPlans = () => {
//   const plansElem = document.querySelector('.plans');
//   return plansElem.innerHTML;
// };
// // console.log(getPlans());

// export const getGoal = () => {
//   const goalElem = document.querySelector('.goal');
//   return goalElem.outerHTML;
// };
// console.log(getGoal());
// export const setTitle = (text) => {
//   const titleText = document.querySelector('.title');
//   titleText.textContent = text;
// };
// export function setButton(buttonText) {
//   const bodyElement = document.querySelector('body');
//   bodyElement.innerHTML = `<button>${buttonText}</button>`;
// }

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = (value) => (value ? undefined : 'Required');

const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

// const validate = (fieldName, value) => {

// }

const onEmailChange = (event) => {
  const errorText = [isRequired, isEmail]
    .map((val) => val(event.target.value))
    .filter((errorText) => errorText)
    .join(', ');
  emailErrorElem.textContent = errorText;
};

const onPasswordChange = (event) => {
  const errorText = [isRequired]
    .map((val) => val(event.target.value))
    .filter((errorText) => errorText)
    .join(', ');
  passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElement = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElement)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );

  alert(JSON.stringify(formData));
};

formElement.addEventListener('submit', onFormSubmit);
