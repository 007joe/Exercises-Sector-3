// add pageTitle
const pageTitle = 'My Shopping List';
// add groceries
const groceries = ['cheese', 'milk', 'bread', 'ham', 'chips', 'yogurt',
'eggs', 'grits', 'coffee', 'yams'];

/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  const title = document.getElementById('title');
  title.innerText = pageTitle;

}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
  const main = document.getElementById('groceries');
  for (let i = 0; i < groceries.length; i++) {
    const container = document.createElement('li');
    container.innerText = groceries[i];
    main.insertAdjacentElement('beforeend', container);
  }
};

// //addFood(parent, items) {
//   const food = document.createElement('li');
//   food.innerText = items;
//   parent.appendChild('groceries');
// }

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
  const finished = document.querySelectorAll('li');
  finished.forEach((complete) => {
    // const markCompleted = document.getElementById('li');
    complete.setAttribute('class', 'completed');
  });
  }


setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});

