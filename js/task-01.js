const innerCategories = document.querySelectorAll('.item');

const categoriesQty = `Number of categories: ${innerCategories.length}`;

console.log(categoriesQty);

//===============================

const categoriesTitles = document.querySelectorAll('h2');
const listsOfCategories = document.querySelectorAll('.item ul');

categoriesTitles.forEach(title => {
  console.log(`Category: ${title.textContent}`);

  listsOfCategories.forEach(list => {
    if (list.parentNode === title.parentNode) {
      console.log(`Elements: ${list.children.length}`);
    }
  });
});
