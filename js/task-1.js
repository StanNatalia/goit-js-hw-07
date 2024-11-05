const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories:`, categories.length);

categories.forEach((category) => {
const categoryName = category.querySelector("h2");
const categoryItem = category.querySelectorAll("ul li");

console.log(`Category:`, categoryName.textContent);
console.log(`Elements:`, categoryItem.length);
});
