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
export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
};

getTitleElement();

export const getInputElem = () => {
  const inputElem = document.querySelector('input[type="text"]');
  console.dir(inputElem);
  return inputElem;
};

getInputElem();
