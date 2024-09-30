let sitecore = {
  title: 'My Digital Vouchers',
  description: 'To redeem a voucher, simply add a product to the trolley by searching for that product individually or within a qualifying Aisle or Shelf. You can view more details about where the voucher is applied using the "View Details" link or simply shop straight away using the "Shop now" button.'
};

let voucherColor = {
  money: '#0454A1',
  percentage: '#D6901A',
  free: '#3CAD43',
  button: '#0454A1',
}

let digitalVouchers = [
  {
    id: 1,
    midascode: 123456,
    promotion: 'Money off',
    description: 'Get £10 off when purchasing any product in the Fresh Beef aisle',
    expiry: 10,
    url: '',
    titleBgColor: voucherColor.money,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff'

  },
  {
    id: 2,
    midascode: 234567,
    promotion: 'Percentage off',
    description: 'Get £10 off when purchasing any product in the Fresh Fish aisle',
    expiry: 8,
    url: '',
    titleBgColor: voucherColor.percentage,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff'
  },
  {
    id: 3,
    midascode: 345678,
    promotion: 'Free Product',
    description: 'Get a free case of Chef\'s Larder Chip',
    expiry: 5,
    url: '',
    titleBgColor: voucherColor.free,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff'
  },
  {
    id: 4,
    midascode: 456789,
    promotion: 'Money off',
    description: 'Get £0.50 off Chef\'s Larder Steak Cut Chips',
    expiry: 12,
    url: '',
    titleBgColor: voucherColor.money,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff'
  },
  {
    id: 5,
    midascode: 567890,
    promotion: 'Money off',
    description: 'Get £2.75 off Chef\'s Larder Premium Real Mayonnaise 5 Litres',
    expiry: 1,
    url: '',
    titleBgColor: voucherColor.money,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff'
  },
  {
    id: 6,
    midascode: 678901,
    promotion: 'Percentage off',
    description: 'Get 5% off when purchasing any product in the Takeaway Food containers Shelf',
    expiry: 10,
    url: '',
    titleBgColor: voucherColor.percentage,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff'
  }
];


let digitalVouchersContent = document.querySelector('.digitalVouchers');

digitalVouchersContent.innerHTML = `<h2 class="digitalVouchersPageTitle">${sitecore.title}</h2><p class="digitalVouchersPageText">${sitecore.description}</p>`;

digitalVouchersContent.innerHTML += digitalVouchers.map(voucher =>
 `
 <digital-voucher 
  data-id="${voucher.id}"
  data-midascode="${voucher.midascode}"
  data-promotion="${voucher.promotion}"
  data-description="${voucher.description}"
  data-expiry="${voucher.expiry}"
  data-url="${voucher.url}"
  data-title-bg-color="${voucher.titleBgColor}"
  data-title-font-color="${voucher.titleFontColor}"
  data-btn-bg-color="${voucher.btnBgColor}"
  data-btn-text="${voucher.btnText}"
  data-btn-font-color="${voucher.btnFontColor}"
  ></digital-voucher>
`).join('');



class DigitalVoucher extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.voucher = {
      id: this.getAttribute('data-id'),
      midascode: this.getAttribute('data-midascode'),
      promotion: this.getAttribute('data-promotion'),
      description: this.getAttribute('data-description'),
      expiry: this.getAttribute('data-expiry'),
      url: this.getAttribute('data-url'),
      titleBgColor: this.getAttribute('data-title-bg-color'),
      titleFontColor: this.getAttribute('data-title-font-color'),
      btnBgColor: this.getAttribute('data-btn-bg-color'),
      btnText: this.getAttribute('data-btn-text'),
      btnFontColor: this.getAttribute('data-btn-font-color')
    }
    this.render();
  }

  render = () => {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }

  template = () => `
  <div class="card h-100">
    <div class="card-body">
      <div class="card-title" style="background: ${this.voucher.titleBgColor}; color: ${this.voucher.titleFontColor}"><p>${this.voucher.promotion} Voucher</p></div>
      <div class="card-text">
        <p class="card-description">${this.voucher.description}</p>
      </div>
      <div class="card-bottom">
        <p><span class="dot"></span> <span class="expiry">Expiring in ${this.voucher.expiry} days</span>  <a href="${this.voucher.url}" class="btn" style="background: ${this.voucher.btnBgColor}; color: ${this.voucher.btnFontColor}">${this.voucher.btnText}</a></p>
      </div>
    </div>
  </div>
  `;
}

customElements.define('digital-voucher', DigitalVoucher);