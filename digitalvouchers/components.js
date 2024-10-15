const myDigitalVouchersPage = {
  title: 'My Digital Vouchers',
  description: 'To redeem a voucher, simply add a product to the trolley by searching for that product individually or within a qualifying Aisle or Shelf. You can view more details about where the voucher is applied using the "View Details" link or simply shop straight away using the "Shop now" button.'
};

const voucherColor = {
  money: '#0454A1',
  percentage: '#D6901A',
  free: '#3CAD43',
  button: '#0454A1',
}

const digitalVouchers = [
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
    btnFontColor: '#ffffff',
    applied: true,
    termsAndConditions: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
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
    btnFontColor: '#ffffff',
    applied: false
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
    btnFontColor: '#ffffff',
    applied: false
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
    btnFontColor: '#ffffff',
    applied: true
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
    btnFontColor: '#ffffff',
    applied: true
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
    btnFontColor: '#ffffff',
    applied: false,
    termsAndConditions: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
  }
];

const digitalVouchersApplied = {
  title: 'You have Vouchers Applied!!',
  description: 'Click the button below to see all your Vouchers',
  btnText: 'View All Vouchers',
  descriptionColor: '#2356AA',
  titleBgColor: '#2356AA',
  titleFontColor: '#ffffff',
  btnBgColor: '#2356AA',
  btnFontColor: '#ffffff',
}

const digitalVouchersContent = document.querySelector('.digitalVouchers');

const digitalVouchersPanel = document.querySelector('.digitalVouchersPanel');

if (digitalVouchersPanel) {

  digitalVouchersPanel.innerHTML = `
    <digital-vouchers-panel></digital-vouchers-panel>
  `;

  $('digital-vouchers-panel').css('height', $('body').height());
}




if (digitalVouchersContent) {
  digitalVouchersContent.innerHTML = `<h2 class="digitalVouchersPageTitle">${myDigitalVouchersPage.title}</h2><p class="digitalVouchersPageText">${myDigitalVouchersPage.description}</p>`;

  digitalVouchersContent.innerHTML += digitalVouchers.map(voucher => `
  <digital-voucher class="my-3"
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
    data-terms-and-conditions="${voucher.termsAndConditions}"
    ></digital-voucher>
  `).join('');
}


let digitalVouchersAppliedContent = document.querySelector('.digitalVouchersApplied');

if (digitalVouchersAppliedContent) {

  digitalVouchersAppliedContent.innerHTML = `
    <digital-voucher-applied class="my-3"
      data-title="${digitalVouchersApplied.title}"
      data-description="${digitalVouchersApplied.description}"
      data-btn-text="${digitalVouchersApplied.btnText}"
      data-description-color="${digitalVouchersApplied.descriptionColor}"
      data-title-bg-color="${digitalVouchersApplied.titleBgColor}"
      data-title-font-color="${digitalVouchersApplied.titleFontColor}"
      data-btn-bg-color="${digitalVouchersApplied.btnBgColor}"
      data-btn-font-color="${digitalVouchersApplied.btnFontColor}"
    ></digital-voucher-applied>
  `;
}

$(window).scroll(() => {
  if ($(window).scrollTop() >= $('#booker_trolley_first_main').offset().top + $('#booker_trolley_first_main').outerHeight() - window.innerHeight) {
    $('#booker_trolley_first_aside').css('position', 'fixed');
  } else {
    $('#booker_trolley_first_aside').css('position', 'sticky');
  }
});


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
      btnFontColor: this.getAttribute('data-btn-font-color'),
      termsAndConditions: this.getAttribute('data-terms-and-conditions')
    }
    this.render();
  }

  render = () => {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }

  template = () => `
  <div class="card pb-2 h-100">
    <span class="cutaway left"></span>
    <div class="card-body">
      <div class="card-title" style="background: ${this.voucher.titleBgColor}; color: ${this.voucher.titleFontColor}"><span class="promotion">${this.voucher.promotion} Voucher</span><span class="viewDetails">${this.voucher.termsAndConditions !== 'undefined' ? `<a data-target="#digitalVoucherModal${this.voucher.id}" data-toggle="modal" class="viewDetailsLink">View Details</a>` : ``}</span></div>
      <div class="card-text">
        <p class="card-description">${this.voucher.description}</p>
      </div>
      <div class="card-bottom">
        <span class="dotExpiry"><span class="dot"></span> <span class="expiry">Expiring in ${this.voucher.expiry} days</span></span>  <a href="${this.voucher.url}" class="btn digitalVoucher" style="background: ${this.voucher.btnBgColor}; color: ${this.voucher.btnFontColor}">${this.voucher.btnText}</a>
      </div>
    </div>
    <span class="cutaway right"></span>
  </div>
  ${this.voucher.termsAndConditions !== 'undefined' ? `
    <div class="modal fade digitalVoucherModal" id="digitalVoucherModal${this.voucher.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${this.voucher.promotion} Voucher terms and conditions</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <i class="fa-solid fa-circle-xmark"></i>
            </button>
          </div>
          <div class="modal-body">
            <p class="termsAndConditions">${this.voucher.termsAndConditions}</p>
            </div>
        </div>
      </div>
    </div>
    ` : ``}
  `;
}


class DigitalVoucherApplied extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.voucherApplied = {
      title: this.getAttribute('data-title'),
      description: this.getAttribute('data-description'),
      btnText: this.getAttribute('data-btn-text'),
      descriptionColor: this.getAttribute('data-description-color'),
      titleBgColor: this.getAttribute('data-title-bg-color'),
      titleFontColor: this.getAttribute('data-title-font-color'),
      btnBgColor: this.getAttribute('data-btn-bg-color'),
      btnFontColor: this.getAttribute('data-btn-font-color'),
    }
    this.render();
  }

  template = () => `
  <div class="card h-100">
    <span class="cutaway left"></span>
    <div class="card-body">
      <div class="card-title" style="background: ${this.voucherApplied.titleBgColor}; color: ${this.voucherApplied.titleFontColor}"><span class="title">${this.voucherApplied.title}</span></div>
      <div class="card-text" style="color: ${this.voucherApplied.descriptionColor}">
        <p class="card-description">${this.voucherApplied.description}</p>
      </div>
      <div class="card-bottom">
        <button class="btn viewAllVouchers" style="background: ${this.voucherApplied.btnBgColor}; color: ${this.voucherApplied.btnFontColor}">${this.voucherApplied.btnText}</button></p>
      </div>
    </div>
    <span class="cutaway right"></span>
  </div>
  `;

  render = () => {
    this.innerHTML = `
      ${this.template().trim()}
    `;

    const viewAllVouchersBtn = document.querySelector('.viewAllVouchers');

    viewAllVouchersBtn.addEventListener('click', () => {
      $(window).scrollTop(0);
      document.querySelector('.digitalVouchersPanel').classList.toggle('d-none');
    });
  }

}


class DigitalVouchersPanel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
   this.render();
  }

  template = () => `
  <div class="container">
    <div class="d-flex my-3 top">
      <h3>My Digital Vouchers</h3>
      <span class="digitalVouchersPanelClose"><i class="fa-solid fa-circle-xmark fa-xl"></i></span>
    </div>
    <div class="panel panel-default my-3">
      <div class="panel-heading">
        <h4>Vouchers Applied</h4>
      </div>
      <div class="panel-body">  
          ${digitalVouchers.map(voucher => voucher.applied ? `
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
            data-terms-and-conditions="${voucher.termsAndConditions}"
              ></digital-voucher>
          ` : ``).join('')}
      </div>
    </div>

    <div class="panel panel-default my-3">
      <div class="panel-heading">
        <h4>Vouchers Available</h4>
      </div>
      <div class="panel-body">
          ${digitalVouchers.map(voucher => !voucher.applied ? `
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
            data-terms-and-conditions="${voucher.termsAndConditions}"
          ></digital-voucher> 
          ` : ``).join('')}
      </div>
  </div>
</div>
`;

  render = () => {
    this.innerHTML = `
      ${this.template().trim()}
    `;

    const digitalVouchersPanelClose = document.querySelector('.digitalVouchersPanelClose');


    digitalVouchersPanelClose.addEventListener('click', () => {
      document.querySelector('.digitalVouchersPanel').classList.toggle('d-none');
    });
  }

}


customElements.define('digital-voucher', DigitalVoucher);
customElements.define('digital-voucher-applied', DigitalVoucherApplied);
customElements.define('digital-vouchers-panel', DigitalVouchersPanel);
