let sitecore = {
  title: 'My Digital Vouchers',
  description: 'To redeem a voucher, simply add a product to the trolley by searching for that product individually or within a qualifying Aisle or Shelf. You can view more details about where the voucher is applied using the "View Details" link or simply shop straight away using the "Shop now" button.'
};

let vouchers = [
  {
    id: 1,
    promotion: 'Money off',
    description: 'Get £10 off when purchasing any product in the "Fresh Beef" aisle',
    expiry: 10,
    url: ''
  },
  {
    id: 2,
    promotion: 'Percentage off',
    description: 'Get £10 off when purchasing any product in the "Fresh Fish" aisle',
    expiry: 8,
    url: ''
  },
  {
    id: 3,
    promotion: 'Free Product',
    description: 'Get a free case of "Chef\'s Larder Chips"',
    expiry: 5,
    url: ''
  },
  {
    id: 4,
    promotion: 'Money off',
    description: 'Get £0.50 off "Chef\'s Larder Steak Cut Chips',
    expiry: 12,
    url: ''
  },
  {
    id: 5,
    promotion: 'Money off',
    description: 'Get £2.75 off "Chef\'s Larder Premium Real Mayonnaise 5 Litres"',
    expiry: 1,
    url: ''
  },
  {
    id: 6,
    promotion: 'Percentage off',
    description: 'Get 5% off when purchasing any product in the "Takeaway Food containers" Shelf',
    expiry: 10,
    url: ''
  }
];

let voucherHtml = `<h2>${sitecore.title}</h2><p>${sitecore.description}</p>`;

voucherHtml += vouchers.map(voucher => `
  <div class="card">
    <div class="card-body">
      <div class="card-title">${voucher.promotion} Voucher</div>
      <p class="card-text">${voucher.description}</p>
      <div class="flex">
        <p>Expiring in ${voucher.expiry}</p> <a href="${voucher.url}" class="btn btn-primary">Shop now</a>
      </div>
    </div>
  </div>
`
)


let digitalVouchersContent = document.querySelector('.digitalVouchers');
digitalVouchersContent.innerHTML = voucherHtml;