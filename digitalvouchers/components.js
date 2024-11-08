const myDigitalVouchersPage = {
  present: {
    title: 'My Digital Vouchers',
    description: 'To redeem a voucher, simply add a product to the trolley by searching for that product individually or within a qualifying Aisle or Shelf. You can view more details about where the voucher is applied using the "View Details" link or simply shop straight away using the "Shop now" button.'
  },
  expired: {
    title: 'My Expired Vouchers',
    description: 'Below are your vouchers which are expired'
  }
};


const voucherColor = {
  money: '#0454A1',
  percentage: '#D6901A',
  free: '#3CAD43',
  button: '#0454A1',
}

const wrongTrolleyModalContent = {
  title: 'Wrong Trolley Selected',
  text: 'The voucher you have selected is for "EXPECTED TROLLEY TYPE" only. Please switch your trolley to "EXPECTED TROLLEY TYPE" to see your qualifying products'
}

const digitalVouchers = [
  {
    id: 1,
    midascode: 123456,
    promotion: 'Money off',
    description: 'Get £10 off when purchasing any product in the Fresh Beef aisle',
    expiry: 10,
    expired: false,
    url: '',
    titleBgColor: voucherColor.money,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff',
    applied: false,
    termsAndConditions: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  },
  {
    id: 2,
    midascode: 234567,
    promotion: 'Percentage off',
    description: 'Get £10 off when purchasing any product in the Fresh Fish aisle',
    expiry: 8,
    expired: true,
    url: '',
    titleBgColor: voucherColor.percentage,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff',
    applied: false,
    termsAndConditions: ''
  },
  {
    id: 3,
    midascode: 345678,
    promotion: 'Free Product',
    description: 'Get a free case of Chef\'s Larder Chip',
    expiry: 5,
    expired: true,
    url: '',
    titleBgColor: voucherColor.free,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff',
    applied: false,
    termsAndConditions: 'TEST TEST TEST'
  },
  {
    id: 4,
    midascode: 456789,
    promotion: 'Money off',
    description: 'Get £0.50 off Chef\'s Larder Steak Cut Chips',
    expiry: 12,
    expired: true,
    url: '',
    titleBgColor: voucherColor.money,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff',
    applied: false,
    termsAndConditions: ''
  },
  {
    id: 5,
    midascode: 567890,
    promotion: 'Money off',
    description: 'Get £2.75 off Chef\'s Larder Premium Real Mayonnaise 5 Litres',
    expiry: 6,
    expired: false,
    url: '',
    titleBgColor: voucherColor.money,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff',
    applied: false,
    termsAndConditions: ''
  },
  {
    id: 6,
    midascode: 678901,
    promotion: 'Money off',
    description: 'Get £2.99 off when purchasing any product!!!',
    expiry: 10,
    expired: true,
    url: '',
    titleBgColor: voucherColor.money,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Buy now',
    btnFontColor: '#ffffff',
    applied: true,
    termsAndConditions: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
  },
  {
    id: 7,
    midascode: 789012,
    promotion: 'Percentage off',
    description: 'Get 10% off when purchasing any product in the ',
    expiry: 10,
    expired: false,
    url: '',
    titleBgColor: voucherColor.percentage,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff',
    applied: false,
    termsAndConditions: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
  },
  {
    id: 8,
    midascode: 890123,
    promotion: 'Money off',
    description: 'Get a few quid off some Cornettos',
    expiry: 0,
    expired: true,
    url: '',
    titleBgColor: voucherColor.money,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff',
    applied: false,
    termsAndConditions: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
  },
  {
    id: 9,
    midascode: 901234,
    promotion: 'Free Product',
    description: 'Free chips when you buy some cod',
    expiry: 0,
    expired: true,
    url: '',
    titleBgColor: voucherColor.free,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff',
    applied: false,
    termsAndConditions: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
  },
  {
    id: 10,
    midascode: 132345,
    promotion: 'Percentage off',
    description: 'Get 20% off toilet rolls',
    expiry: 10,
    expired: false,
    url: '',
    titleBgColor: voucherColor.percentage,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff',
    applied: true,
    termsAndConditions: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
  },
  {
    id: 11,
    midascode: 290778,
    promotion: 'Money Off',
    description: 'Save 3 quid off Pedro Wine',
    expiry: 20,
    expired: false,
    url: '',
    titleBgColor: voucherColor.money,
    titleFontColor: '#ffffff',
    btnBgColor: voucherColor.button,
    btnText: 'Shop now',
    btnFontColor: '#ffffff',
    applied: true,
    termsAndConditions: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '
  },
];

const numberOfAppliedAvailable = (appliedOrAvailable) => {
  let number = appliedOrAvailable == 'applied' ? digitalVouchers.filter(v => v.applied === true && v.expired !== true).length : appliedOrAvailable == 'available' ? digitalVouchers.filter(v => v.applied === false && v.expired !== true).length : false;
  return number;
}

const digitalVouchersAllExpired = () => {
  return digitalVouchers.filter(voucher => voucher.expired === false).length == 0 ? true : false;
}


const digitalVouchersFilter = (filterBy, value, from = '') => {
  let filteredDigitalVouchers = [];
  filteredDigitalVouchers = from == 'panel' ? digitalVouchers.filter(voucher => voucher.expired === false) : [...digitalVouchers];

  let vouchers = filteredDigitalVouchers.filter(voucher => voucher[filterBy] === value).map(voucher => `
    <digital-voucher class="my-3"
      data-id="${voucher.id}"
      data-midascode="${voucher.midascode}"
      data-promotion="${voucher.promotion}"
      data-description="${voucher.description}"
      data-expiry="${voucher.expiry}"
      data-expired="${voucher.expired}"
      data-url="${voucher.url}"
      data-title-bg-color="${voucher.titleBgColor}"
      data-title-font-color="${voucher.titleFontColor}"
      data-btn-bg-color="${voucher.btnBgColor}"
      data-btn-text="${voucher.btnText}"
      data-btn-font-color="${voucher.btnFontColor}"
      data-terms-and-conditions="${voucher.termsAndConditions}"
      ></digital-voucher>
    `).join('');
    return vouchers;
  
}


const digitalVouchersApplied = {
  title: 'You have Vouchers Applied!!',
  description: 'Click the button below to see all your Vouchers',
  btnText: 'Click here to view',
  descriptionColor: '#2356AA',
  titleBgColor: '#2356AA',
  titleFontColor: '#ffffff',
  btnBgColor: '#2356AA',
  btnFontColor: '#ffffff',
}

const digitalVouchersAvailable = {
  title: `You have ${numberOfAppliedAvailable('available')} vouchers Available!!`,
  description: `Click the button below to see all your ${numberOfAppliedAvailable('available')} Available Vouchers`,
  btnText: 'View All Available Vouchers',
  descriptionColor: '#2356AA',
  titleBgColor: '#2356AA',
  titleFontColor: '#ffffff',
  btnBgColor: '#2356AA',
  btnFontColor: '#ffffff'
}

const digitalVouchersAppliedAvailable = {
  title: `You have ${numberOfAppliedAvailable('applied')} vouchers Applied and ${numberOfAppliedAvailable('available')} vouchers Available!!`,
  description: `Click the button below to see all your ${numberOfAppliedAvailable('available')} vouchers available and ${numberOfAppliedAvailable('applied')} Applied Vouchers`,
  btnText: 'View All Available and Applied Vouchers',
  descriptionColor: '#2356AA',
  titleBgColor: '#2356AA',
  titleFontColor: '#ffffff',
  btnBgColor: '#2356AA',
  btnFontColor: '#ffffff'
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
  digitalVouchersContent.innerHTML = `
    <div class="container digitalVouchers present my-3">
      <h2 class="digitalVouchersPageTitle">${myDigitalVouchersPage.present.title}</h2><p class="digitalVouchersPageText">${myDigitalVouchersPage.present.description}</p>
      ${digitalVouchersFilter('expired', false) ? digitalVouchersFilter('expired', false) : `<strong>You have no present vouchers</strong>`}
    </div>
    <div class="container digitalVouchers expired my-3">
      <h2 class="digitalVouchersPageTitle">${myDigitalVouchersPage.expired.title}</h2><p class="digitalVouchersPageText">${myDigitalVouchersPage.expired.description}</p>
      ${digitalVouchersFilter('expired', true) ? digitalVouchersFilter('expired', true)  : `<strong>You have no expired vouchers</strong>`}
    </div>
    `;
}

const digitalVouchersAppliedContent = document.querySelector('.digitalVouchersApplied');
const digitalVouchersAvailableContent = document.querySelector('.digitalVouchersAvailable');
const digitalVouchersAppliedAvailableContent = document.querySelector('.digitalVouchersAppliedAvailable');

if (digitalVouchersAppliedContent && digitalVouchersAllExpired()) {

  digitalVouchersAppliedContent.innerHTML = `
    <digital-vouchers-applied class="my-3"
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


if (digitalVouchersAvailableContent && digitalVouchersAllExpired()) {

  digitalVouchersAvailableContent.innerHTML = `
    <digital-vouchers-available class="my-3"
      data-title="${digitalVouchersAvailable.title}"
      data-description="${digitalVouchersAvailable.description}"
      data-btn-text="${digitalVouchersAvailable.btnText}"
      data-description-color="${digitalVouchersAvailable.descriptionColor}"
      data-title-bg-color="${digitalVouchersAvailable.titleBgColor}"
      data-title-font-color="${digitalVouchersAvailable.titleFontColor}"
      data-btn-bg-color="${digitalVouchersAvailable.btnBgColor}"
      data-btn-font-color="${digitalVouchersAvailable.btnFontColor}"
      data-number-vouchers-applied="${digitalVouchersAvailable.vouchersApplied}"
      data-number-vouchers-available="${digitalVouchersAvailable.vouchersAvailable}"
    ></digital-voucher-available>
  `;
}

if (digitalVouchersAppliedAvailableContent && digitalVouchersAllExpired()) {

  digitalVouchersAppliedAvailableContent.innerHTML = `
    <digital-vouchers-applied-available class="my-3"
      data-title="${digitalVouchersAppliedAvailable.title}"
      data-description="${digitalVouchersAppliedAvailable.description}"
      data-btn-text="${digitalVouchersAppliedAvailable.btnText}"
      data-description-color="${digitalVouchersAppliedAvailable.descriptionColor}"
      data-title-bg-color="${digitalVouchersAppliedAvailable.titleBgColor}"
      data-title-font-color="${digitalVouchersAppliedAvailable.titleFontColor}"
      data-btn-bg-color="${digitalVouchersAppliedAvailable.btnBgColor}"
      data-btn-font-color="${digitalVouchersAppliedAvailable.btnFontColor}"
      data-number-vouchers-applied="${digitalVouchersAppliedAvailable.vouchersApplied}"
      data-number-vouchers-available="${digitalVouchersAppliedAvailable.vouchersAvailable}"
    ></digital-voucher-applied-available>
  `;
}

$(window).scroll(() => {
  if ($(window).scrollTop() >= $('#booker_trolley_first_main').offset().top + $('#booker_trolley_first_main').outerHeight() - window.innerHeight) {
    $('#booker_trolley_first_aside').css('position', 'fixed');
  } else {
    $('#booker_trolley_first_aside').css('position', 'sticky');
  }
});


class DigitalVouchersNotification extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render = () => {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }

  template = () => `
    <nav class="alert alert-dismissible" style="background: ${digitalVouchersNotificationAttr.backgroundColor}" role="alert">
      <span class="digitalVouchersNotificationMsg" style="color: ${digitalVouchersNotificationAttr.textColor}">${digitalVouchersNotificationAttr.text}</span> <a href="" class="btn" style="background: ${digitalVouchersNotificationAttr.buttonBgColor}; color: ${digitalVouchersNotificationAttr.buttonTextColor}">${digitalVouchersNotificationAttr.buttonText}</a>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </nav>
  `;


}

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
      expired: this.getAttribute('data-expired'),
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
      <div class="card-title" style="background: ${this.voucher.titleBgColor}; color: ${this.voucher.titleFontColor}"><span class="promotion">${this.voucher.promotion} Voucher</span><span class="viewDetails">${this.voucher.termsAndConditions !== 'undefined' && this.voucher.termsAndConditions !== '' ? `<a data-target="#digitalVoucherModal${this.voucher.id}" data-toggle="modal" class="viewDetailsLink">View Details</a>` : ``}</span></div>
      <div class="card-text">
        <p class="card-description">${this.voucher.description}</p>
      </div>
      <div class="card-bottom">
        <span class="dotExpiry"><span class="dot"></span> <span class="expiry">${this.voucher.expired === 'true' ? `Expired` : `Expiring in ${this.voucher.expiry} days</span></span><a href="${this.voucher.url}" class="btn digitalVoucher" style="background: ${this.voucher.btnBgColor}; color: ${this.voucher.btnFontColor}">${this.voucher.btnText}</a>`}
      </div>
    </div>
    <span class="cutaway right"></span>
  </div>
  ${this.voucher.termsAndConditions !== 'undefined' && this.voucher.termsAndConditions !== '' ? `
    <div class="modal fade digitalVoucherModal" id="digitalVoucherModal${this.voucher.id}" tabindex="-1" aria-hidden="true">
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


class DigitalVouchersApplied extends HTMLElement {
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
        <button class="btn viewAllVouchers" style="background: ${this.voucherApplied.btnBgColor}; color: ${this.voucherApplied.btnFontColor}">${this.voucherApplied.btnText}</button>
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
        ${digitalVouchersFilter('applied', true, 'panel')}
      </div>
    </div>

    <div class="panel panel-default my-3">
      <div class="panel-heading">
        <h4>Vouchers Available</h4>
      </div>
      <div class="panel-body">
      ${digitalVouchersFilter('applied', false, 'panel')}
      </div>
  </div>
</div>
`;

  render = () => {
    this.innerHTML = `
      ${this.template().trim()}
    `;

    const panel = document.querySelector('.digitalVouchersPanel');
    const digitalVouchersPanelClose = document.querySelector('.digitalVouchersPanelClose');
    
    window.addEventListener('mouseup', (event) => {
      if (!event.target.closest('.digitalVouchersPanel')) {
        panel.classList.add('d-none');
      }
    });

    digitalVouchersPanelClose.addEventListener('click', () => {
      panel.classList.add('d-none');
    });
  }

}

class DigitalVouchersAvailable extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.vouchersAvailable = {
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
      <div class="card-title" style="background: ${this.vouchersAvailable.titleBgColor}; color: ${this.vouchersAvailable.titleFontColor}"><span class="title">${this.vouchersAvailable.title}</span></div>
      <div class="card-text" style="color: ${this.vouchersAvailable.descriptionColor}">
        <p class="card-description">${this.vouchersAvailable.description}</p>
      </div>
      <div class="card-bottom">
        <button class="btn viewAllVouchers" style="background: ${this.vouchersAvailable.btnBgColor}; color: ${this.vouchersAvailable.btnFontColor}">${this.vouchersAvailable.btnText}</button></p>
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


class DigitalVouchersAppliedAvailable extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.vouchersAppliedAvailable = {
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
      <div class="card-title" style="background: ${this.vouchersAppliedAvailable.titleBgColor}; color: ${this.vouchersAppliedAvailable.titleFontColor}"><span class="title">${this.vouchersAppliedAvailable.title}</span></div>
      <div class="card-text" style="color: ${this.vouchersAppliedAvailable.descriptionColor}">
        <p class="card-description">${this.vouchersAppliedAvailable.description}</p>
      </div>
      <div class="card-bottom">
        <button class="btn viewAllVouchers" style="background: ${this.vouchersAppliedAvailable.btnBgColor}; color: ${this.vouchersAppliedAvailable.btnFontColor}">${this.vouchersAppliedAvailable.btnText}</button></p>
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

const wrongTrolleyModal = () => {
  const wrongTrolleyModal = document.createElement('div');
  wrongTrolleyModal.innerHTML = `
  <div id="wrongTrolleyModal" class="modal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">${wrongTrolleyModalContent.title}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>${wrongTrolleyModalContent.text}</p>
        </div>
      </div>
    </div>
  </div>
  `;
  document.body.appendChild(wrongTrolleyModal);
}

const digitalVouchersNotificationAttr = {
  backgroundColor: '#2356AA',
  text: `You have <strong>${numberOfAppliedAvailable('available')}</strong> ${numberOfAppliedAvailable('available') > 1 ? `vouchers` : `voucher`} available`,
  textColor: '#ffffff',
  buttonText: 'View All Vouchers',
  buttonBgColor: '#ED6511',
  buttonTextColor: '#ffffff',
}

const topNavBar = document.querySelector('#shopping-header-desktop .top-nav');
topNavBar.parentElement.classList.remove('py-3');
topNavBar.parentElement.classList.add('pb-3');
const topNavBarMobile = document.querySelector('#shopping-header-mobile #search-bar');

const digitalVouchersNotificationsDiv = document.createElement('div');
digitalVouchersNotificationsDiv.innerHTML = `<digital-vouchers-notification></digital-vouchers-notification>`;
const digitalVouchersNotificationsDivMob = digitalVouchersNotificationsDiv.cloneNode(true);
topNavBar.before(digitalVouchersNotificationsDiv);
topNavBarMobile.before(digitalVouchersNotificationsDivMob);

wrongTrolleyModal();

if (isClickAndCollect && isDelivery) {
  document.querySelector('#click-collect').addEventListener('click', () => {
    $('#wrongTrolleyModal').modal('show');    
  });
}


customElements.define('digital-voucher', DigitalVoucher);
customElements.define('digital-vouchers-applied', DigitalVouchersApplied);
customElements.define('digital-vouchers-panel', DigitalVouchersPanel);
customElements.define('digital-vouchers-available', DigitalVouchersAvailable);
customElements.define('digital-vouchers-applied-available', DigitalVouchersAppliedAvailable);
customElements.define('digital-vouchers-notification', DigitalVouchersNotification);
