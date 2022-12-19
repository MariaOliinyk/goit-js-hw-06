const navEl = document.querySelector('#categories')
const itemEl = navEl.querySelectorAll('.item');

console.log(`Number of categories: ${itemEl.length}`);

for (let item of itemEl) {
    const itemNameEl = item.querySelector('h2')
    console.log(`Category: ${itemNameEl.textContent}`);
    const numberItemsEl = item.querySelectorAll('li');
    console.log(`Elements: ${numberItemsEl.length}`)
}