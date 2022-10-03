const innerCategories = document.querySelectorAll('.item');

const categoriesQty = `Number of categories: ${innerCategories.length}`;

console.log(categoriesQty);

//===============================

const categoriesTitles = document.querySelectorAll('.item h2');
for (const title of categoriesTitles) {
  console.log(`Category: ${title.textContent}`);

  const listsOfCategories = document.querySelectorAll('.item ul');
  for (const list of listsOfCategories) {
    if (title.parentNode === list.parentNode) {
      console.log(`Elements: ${list.children.length}`);
    }
  }
}
