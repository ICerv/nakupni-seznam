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