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
