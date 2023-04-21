/*
const items = [
  {
    id: 'MFJSFr',
    product: 'Rohlíky',
    amount: '10',
    done: false,
  },
  {
    id: 'wvsbDD',
    product: 'Máslo',
    amount: '500 g',
    done: true,
  },
  {
    id: 'm0CccN',
    product: 'Šunka',
    amount: '200 g',
    done: true,
  },
];

document.querySelector('.shopping-list').innerHTML +=
  items.map((item) => {
    return `
  <li class="item">
  <div class="item__name">${item.product}</div>
  <div class="item__amount">${item.amount}</div>
</li>
  `
  }).join('')
  */

const renderShoppingList = (items) => {
  const shoppingList = document.querySelector('.shopping-list');
  if (shoppingList) {
    shoppingList.innerHTML = items.map((item) => {
      return `
          <div class="list-item">
            <div class="list-item__product">${item.product}</div>
            <div class="list-item__amount">${item.amount}</div>
          </div>
        `;
    })
      .join('');
  }
};


fetch('https://nakupy.kodim.app/api/sampleweek/mon/items')
  .then((response) => response.json())
  .then((data) => renderShoppingList(data.result))
  //.catch((error) => console.error(error));
