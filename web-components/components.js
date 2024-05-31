const productsData = [
  {
    title: 'Coca-Cola Zero Sugar',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657922-9294861134854115.jpg',
    midascode: 100001,
    brand: 'coca-cola',
    price: 13.09,
    rrp: 1.39,
    por: 49.7,
    quantity: 0
  },
  {
    title: 'Coca-Cola Lemon',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15227578-8645125050786129.jpg',
    midascode: 100002,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5,
    quantity: 0
  },
  {
    title: 'Coca-Cola Original',
    volume: '24 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/13869129-4134964590200453.jpg',
    midascode: 100003,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5,
    quantity: 0
  },
  {
    title: 'Coca-Cola Cherry',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657920-1654899330330921.jpg',
    midascode: 100004,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5,
    quantity: 0
  },
  {
    title: 'Coca-Cola Original Taste Glass Bottles',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657918-9414807812038433.jpg',
    midascode: 100005,
    brand: 'coca-cola',
    price: 13.99,
    rrp: 1.39,
    por: 55.5,
    quantity: 0
  },
  {
    title: 'Coca-Cola Zero Sugar Lemon',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/15227577-1255125050706956.jpg',
    midascode: 100006,
    brand: 'coca-cola',
    price: 14.99,
    rrp: 1.49,
    por: 57.5,
    quantity: 0
  },
  {
    title: 'Coca-Cola Zero Sugar Cherry',
    volume: '24 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12912901-1414889184313857.jpg',
    midascode: 100007,
    brand: 'coca-cola',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Costa Coffee Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657928-1344965615047130.jpg',
    midascode: 100008,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Costa Coffee Vanilla Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12882462-1564965615215088.jpg',
    midascode: 100009,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Costa Coffee Caramel Latte',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657927-1074965615454608.jpg',
    midascode: 100010,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Costa Coffee Flat White',
    volume: '12 x 250ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12882463-3574965914586723.jpg',
    midascode: 100011,
    brand: 'costa coffee',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Jack Daniel\'s and Coca-Cola',
    volume: '12 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14509056-2415036628891027.jpg',
    midascode: 100012,
    brand: 'jack daniels',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Jack Daniel\'s and Coca-Cola Zero',
    volume: '12 x 330ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/14509057-9895036629017087.jpg',
    midascode: 100013,
    brand: 'jack daniels',
    price: 15.99,
    rrp: 1.59,
    por: 58.5,
    quantity: 0
  },
  {
    title: 'Relentless Fruit Punch Energy Drink',
    volume: '12 x 500ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/960/960/15355387-8795143410513525.jpg',
    midascode: 100014,
    brand: 'relentless',
    price: 11.99,
    rrp: 1.99,
    por: 41.5,
    quantity: 0
  },
  {
    title: 'Relentless Raspberry Zero Sugar Energy Drink',
    volume: '12 x 500ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/960/960/13733909-2774951400808045.jpg',
    midascode: 100015,
    brand: 'relentless',
    price: 12.99,
    rrp: 1.89,
    por: 40.5,
    quantity: 0
  },
  {
    title: 'Relentless Origin Energy Drink',
    volume: '12 x 500ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/960/960/13220383-1204886545310409.jpg',
    midascode: 100016,
    brand: 'relentless',
    price: 13.99,
    rrp: 1.79,
    por: 44.5,
    quantity: 0
  },
  {
    title: 'Relentless Peach Zero Sugar Energy Drink',
    volume: '12 x 500ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/960/960/13733910-9564951400918733.jpg',
    midascode: 100017,
    brand: 'relentless',
    price: 13.79,
    rrp: 1.83,
    por: 45.5,
    quantity: 0
  },
  {
    title: 'Relentless Cherry Energy Drink',
    volume: '12 x 500ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/960/960/13220386-3294886545986861.jpg',
    midascode: 100018,
    brand: 'relentless',
    price: 13.49,
    rrp: 1.89,
    por: 45.8,
    quantity: 0
  },
  {
    title: 'Relentless Passion Punch Energy Drink',
    volume: '12 x 500ml',
    image: 'https://static.thcdn.com/images/large/webp//productimg/960/960/13220384-1685004239058525.jpg',
    midascode: 100019,
    brand: 'relentless',
    price: 13.19,
    rrp: 1.93,
    por: 46.8,
    quantity: 0
  }
];

const productCategories = [
  {
    category: 'Coca Cola Original Taste - Glass Bottles',
    url: 'https://www.yourcoca-cola.co.uk/coca-cola-original-taste-24-x-330ml-glass-bottles/12657918.html'
  },
  {
    category: 'Fanta Orange Zero',
    url: 'https://www.yourcoca-cola.co.uk/fanta-orange-zero-24-x-330ml/12752523.html'
  },
  {
    category: 'Diet Coke',
    url: 'https://www.yourcoca-cola.co.uk/diet-coke-24-x-330ml/12657929.html'
  },
  {
    category: 'Monster Energy Drink Ultra Peachy Keen',
    url: 'https://www.yourcoca-cola.co.uk/monster-energy-drink-ultra-12-x-500ml/12657943.html'
  },
  {
    category: 'Relentless Fruit Punch',
    url: 'https://www.yourcoca-cola.co.uk/relentless-fruit-punch-energy-drink-12-x-500ml/15355387.html'
  },
  {
    category: 'Powerade Golden Mango',
    url: 'https://www.yourcoca-cola.co.uk/powerade-golden-mango-12-x-500ml/15213056.html'
  },
  {
    category: 'Coca Cola Lemon',
    url: 'https://www.yourcoca-cola.co.uk/coca-cola-lemon-24-x-330ml/15227578.html'
  },
  {
    category: 'Reign Razzle Berry',
    url: 'https://www.yourcoca-cola.co.uk/reign-razzle-berry-12-x-500ml/12918403.html'
  }
];

const heroBannerCarousel = [
  {
    image: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/49/original-New_Fanta_Desktop-011449.png',
    alt: 'Fanta',
    url: 'https://www.yourcoca-cola.co.uk/brands/fanta.list'
  },
  {
    image: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/09/Coca-cola-banner-1920x700-073909.png',
    alt: 'Coca Cola',
    url: 'https://www.yourcoca-cola.co.uk/brands/coca-cola-original-taste.list'
  },
  {
    image: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/19/original-ABBA_Brand_Page_Banner_1-012219.png',
    alt: 'Absolut Vodka',
    url: 'https://www.yourcoca-cola.co.uk/brands/absolut-vodka-sprite.list'
  },
  {
    image: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/00/Appletiser-banner-1920x700-080600.png',
    alt: 'Appletiser',
    url: 'https://www.yourcoca-cola.co.uk/brands/appletiser.list'
  },
  {
    image: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/45/original-Dr_Pepper_Brands_Page_Desktop-091945.png',
    alt: 'Dr Pepper',
    url: 'https://www.yourcoca-cola.co.uk/brands/dr-pepper.list'
  },
  {
    image: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/35/original-Desktop-031535.png',
    alt: 'Jack Daniels',
    url: 'https://www.yourcoca-cola.co.uk/brands/jack-daniels-coca-cola.list'
  },
  {
    image: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/00/original-Desktop_%2831%29-025700.png',
    alt: 'Lilt',
    url: 'https://www.yourcoca-cola.co.uk/brands/lilt.list'
  },
  {
    image: 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/14/original-Sprite_1920x586px-020414.png',
    alt: 'Sprite',
    url: 'https://www.yourcoca-cola.co.uk/brands/sprite.list' 
  }
];

const subPageNavigation = [
  {
    id: 'home',
    title: 'Home',
    text: 'Limited-Time Offer: Place an order worth £60+ and choose a Free Gift OR Free Entry to our Prize Draw for a Chance To Win £250 of account credit, which you can use to buy your favourite drinks from Your Coca-Cola. Offer ends 19/05/24. Gifts available while stocks last.',
    image: 'https://static.thcdn.com/images/medium/webp/widgets/190-en/17/original-Free_Gift_Mobile-073417.png',
    color: '#000000'
  },
  {
    id: 'monster',
    title: 'Monster Energy',
    text: 'Tear into a can of Monster Energy wherever your journey takes you, the meanest energy drink on the planet. The Monster Energy blend combined with caffeine gives you the energy you need in a smooth easy drinking flavour. Athletes, gamers, musicians, students, road warriors, metal heads, geeks, hipsters, and bikers dig it - you will too. Unleash the Beast!',
    image: 'https://static.thcdn.com/images/medium/webp/widgets/190-en/14/Monster-header-375x375-113914.png',
    color: '#121212'
  },
  {
    id: 'cocacola',
    title: 'Coca Cola',
    text: 'Coca‑Cola history began in 1886 when Dr. John Pemberton created a distinctive soft drink now known as Coca-Cola Original Taste. Today, you can find Coca-Cola Original Taste in a variety of sizes to suit every lifestyle and occasion.',
    image: 'https://static.thcdn.com/images/medium/webp/widgets/190-en/29/Coca-cola-header-375x375-090329.png',
    color: '#C70100'
  },
  {
    id: 'fanta',
    title: 'Fanta',
    text: 'Bright, bubbly, instantly refreshing and great tasting. Fanta is made with 100% natural flavours and is caffeine free. Fanta is available in a variety of real fruit flavours.',
    image: 'https://static.thcdn.com/images/medium/webp/widgets/190-en/58/original-New_Fanta_Mobile-011458.png',
    color: '#F86C02'
  }
]



class InfoCardA extends HTMLElement {
  template = () => `
  <div class="row">
    <div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
      <div class="card h-100 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <img src="${this.image}" alt="${this.alt}" />
        <div class="card-body">
          <div class="p-4">
            <p class="h6" style="font-size: ${this.headingSize}; color: ${this.headingColor}">${this.heading}</h6>
          </div>
          <div class="p-4">
            <p style="font-size: ${this.textSize}; color: ${this.textColor}; ">${this.text} ${this.count}</p>
          </div>
          <div class="p-4">
            <a href="${this.url}" class="btn btn-primary infoCardABtn" style="background: ${this.buttonBgColor}; color: ${this.buttonFontColor};">${this.buttonText}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `

  constructor() {
    super();
  }

  connectedCallback() {
    this.heading = '[TITLE] SEASONAL PROMOTION BANNER';
    this.headingSize = '24px';
    this.headingColor = '#000000';
    this.image = 'https://www.insidehook.com/wp-content/uploads/2021/07/cokezero-h.jpg?fit=1200%2C800';
    this.alt = 'Coca Cola Zero Sugar';
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas massa sit amet mi rutrum, a hendrerit ante pulvinar. Vivamus id risus a lorem consequat lobortis a id purus. Maecenas ac dui vulputate, posuere arcu ut, aliquet arcu. Fusce mollis lacinia ipsum sed facilisis.';
    this.buttonFontColor = '#ffffff';
    this.buttonBgColor = '#000000';
    this.buttonText = 'Shop Now';
    this.url = 'https://www.yourcoca-cola.co.uk/brands/coca-cola-zero-sugar.list';
    this.textSize = '20px';
    this.textColor = '#808080';
    this.count = 0;
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
    this.querySelector('.infoCardABtn').addEventListener('click', this.shopNowClick);
  }

  shopNowClick = () => {
    this.count++;
    this.render();
  }
}


class InfoCardB extends HTMLElement {
  template = () => `
  <div class="row">
    <div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
      <div class="card h-100 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <img src="${this.image}" alt="${this.alt}" class="img-fluid" />
        <div class="card-body" style="background: ${this.cardBgColor}">
          <div class="p-4">
            <h6 style="font-size: ${this.headingSize}; color: ${this.headingColor};">${this.heading}</h6>
          </div>
          <div class="p-4">
            <p style="font-size: ${this.textSize}; color: ${this.textColor};">${this.text}</p>
          </div>
          <div class="p-4">
            <a href="${this.url}" class="text-decoration-none" style="color: ${this.urlColor};">${this.urlText} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></a>
          </div>
        </div>
      </div>
    </div>
  </div>
    `

  constructor() {
    super();
    this.heading = '[TITLE] Jack Daniels & Coca Cola';
    this.image = 'https://static.thcdn.com/images/medium/webp/widgets/190-en/24/Two_Item_Image_-_Option_2-041524.png';
    this.alt = 'JD and Coke';
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas massa sit amet mi rutrum, a hendrerit ante pulvinar. Vivamus id risus a lorem consequat lobortis a id purus. Maecenas ac dui vulputate, posuere arcu ut, aliquet arcu. Fusce mollis lacinia ipsum sed facilisis.';
    this.textColor = '#404040';
    this.textSize = '16px';
    this.url = 'https://www.yourcoca-cola.co.uk/brands/jack-daniels-coca-cola.list';
    this.urlText = 'Shop now';
    this.urlColor = '#000000';
    this.headingSize = '24px';
    this.headingColor = '#ff0000';
    this.cardBgColor = '#f8f8f8';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


class ProductCard extends HTMLElement {
  template = () => `
  <div class="row">
    <div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
      <div class="card mx-auto h-100 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-title">
          <span class="fw-bold">${this.product.midascode}</span>
        </div>
        <img src=${this.product.image} class="mb-5" />
        <div class="row mb-3">
          <span class="fw-bold">${this.product.title}</span>
        </div>
        <div class="row mb-3">
          <div class="col">
            ${this.product.volume}
          </div>
          <div class="col">
            <div class="fw-bold">&pound;${this.product.price}</div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <a href="#">Add to List</a>
          </div>
          <div class="col">
            <span>RRP: ${this.product.rrp}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col offset-6">
            <span>POR: ${this.product.por}%</span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn button productCardMinus">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
            </svg>
          </button>
          <div class="col-2">
            <input type="text" class="form-control text-center" value=${this.product.quantity} />
          </div>
          <button class="btn button productCardPlus">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
            </svg>
          </button>
        </div>  
        <div class="p-4">
          <button type="button" class="btn btn-primary button booker">Shop Now</button>
        </div>
      </div>
    </div>
  </div>
    `;

  constructor() {
    super();
    this.product = {
      title: 'Coca-Cola Zero Sugar',
      volume: '24 x 330ml',
      image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12657922-9294861134854115.jpg',
      midascode: 100001,
      brand: 'coca-cola',
      price: 13.09,
      rrp: 1.39,
      por: 49.7,
      quantity: 0
    };
    
    this.render();

  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;

    this.querySelector('.productCardPlus').addEventListener('click', this.productCardPlusClick);
    this.querySelector('.productCardMinus').addEventListener('click', this.productCardMinusClick);
  }
  
  productCardPlusClick = () => {
    this.product.quantity++;
    this.render();
  }

  productCardMinusClick = () => {
    this.product.quantity > 0 ? this.product.quantity-- : false;
    this.render();
  } 
}

class HeroBannerCarousel extends HTMLElement {
  template = () => `
  <div id="HeroBannerCarousel" class="carousel">
    <div class="carousel-inner">
    ${this.heroBannerCarousel.map((val, key) => `
      <div class="carousel-item ${key == 0 ? "active" : ""}">
        <a href="${val.url}"><img src="${val.image}" class="d-block w-100" alt="${val.alt}"></a>
      </div>
      `).join('')}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#HeroBannerCarousel" data-bs-slide="prev" style="background: ${this.arrowBgColor}">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
  </svg>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#HeroBannerCarousel" data-bs-slide="next" style="background: ${this.arrowBgColor}">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
      </svg>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  `;

  constructor() {
    super();
    this.heroBannerCarousel = heroBannerCarousel;
    this.arrowColor = '';
    this.arrowBgColor = '#000000';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


class Heading extends HTMLElement {
  template = () => `
    <h1 class="display-6" style="color: ${this.fontColor}; font-size: ${this.fontSize}">${this.heading}</p>
  `;

  constructor() {
    super();
    this.heading = 'Shop products';
    this.fontColor = '#d3d3d3';
    this.fontSize = '48px';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


class ProductCardList extends HTMLElement {
  template = () => `
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
    ${this.products.map(p => `
    <div class="col">
      <div class="card mx-auto h-100 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-title">
          <span class="fw-bold">${p.midascode}</span>
        </div>
        <img src=${p.image} class="mb-5" />
        <div class="row mb-3">
          <span class="fw-bold">${p.title}</span>
        </div>
        <div class="row mb-3">
          <div class="col">
            <span>${p.volume}</span>
          </div>
          <div class="col">
            <span class="fw-bold">&pound;${p.price}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <a href="#">Add to List</a>
          </div>
          <div class="col">
            <span>RRP: ${p.rrp}</span>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col offset-6">
            <span>POR: ${p.por}%</span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button class="btn button productCardListMinus" id="${p.midascode}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
            </svg>
          </button>
          <div class="col-3">
            <input type="text" class="form-control text-center" value=${p.quantity} />
          </div>
          <button class="btn button productCardListPlus" id="${p.midascode}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
            </svg>
          </button>
        </div>
        <div class="p-4">
          <button type="button" class="btn btn-primary button booker">Shop Now</button>
        </div>
      </div>
        </div>
    `).join('')}
  </div>
  `
  constructor() {
    super();
    this.products = productsByBrand('costa coffee');
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;

    const plus = this.querySelectorAll('.productCardListPlus');
    const minus = this.querySelectorAll('.productCardListMinus');

    [...plus].map(p => p.addEventListener('click', () => { this.productCardListPlusClick(p) }));
    [...minus].map(m => m.addEventListener('click', () => { this.productCardListMinusClick(m) }));
  }

  productCardListPlusClick = (card) => {
    this.products.find((value, index) => {
      if (value.midascode == card.id) {
        this.products[index].quantity++;
      }
    });
    this.render();
  }

  productCardListMinusClick = (card) => {
    this.products.find((value, index) => {
      if (value.midascode == card.id && this.products[index].quantity > 0) {
        this.products[index].quantity--;
      }
    });
    this.render();
  } 
}


class LinkToShop extends HTMLElement {
  template = () => `
    <div class="row mb-3">
      <a href="${this.url}" target="_blank"><img src="${this.image}" class="img-fluid" alt="${this.alt}" /></a>
    </div>
    <div class="row">
      <a href="${this.url}">${this.name} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg>
      </a>
    </div>
    `;
  

  constructor() {
    super();
    this.image = 'https://www.booker.co.uk/-/media/Images/Booker-Supplier-Income/FY25-NP3/NP3-GroceryCatering-Caterer-Unilever.png?iar=0&hash=4989B548FFC2265B10C9840071333582';
    this.name = 'Visit Hellmann\'s Mayonnaise store';
    this.url = 'https://www.hellmanns.com/us/en/products/mayonnaise.html';
    this.alt = 'Jack Grealish';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}

class ImageCard extends HTMLElement {
  template = () => `
    <div>
      <img src="${this.image}" class="img-fluid" />
    </div>
    <a href="${this.url}" class="btn btn-light imageCardBtn" style="color: ${this.fontColor}; background: ${this.buttonBgColor};">${this.buttonText}</a>
  `;

  constructor() {
    super();
    this.url = 'https://www.yourcoca-cola.co.uk/shop.list?pageNumber=1&facetFilters=en_brand_content:Coca-Cola+Original+Taste';
    this.image = 'https://static.thcdn.com/images/medium/webp/widgets/190-en/01/original-cczsbrand-031501.png';
    this.buttonText = 'Shop';
    this.fontColor = '#ffffff';
    this.buttonBgColor = '#000000';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}

class HeroBannerA extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });
    
    shadow.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
      .hero-banner-a-button {
        background: ${this.getAttribute('data-btn-bg-color')};
        color: ${this.getAttribute('data-btn-color')};
        padding: 11.2px 40px 12.8px;
        border-radius: 24px;
        display: block;
      }
      @media (min-width: 768px) {
        .hero-banner-a-button {
          position:relative;
          bottom:75px;
          display: inline-block;
        }
      }
    </style>
    <div class="container text-center mt-5 mb-5">
      <img src="${this.getAttribute('data-image')}" class="img-fluid" />
      <a class="btn btn-light mt-3 hero-banner-a-button" href="${this.getAttribute('data-url')}">${this.getAttribute('data-text')}</a>
    </div>
    `;
  }
}



/*class HeroBannerA extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });
    this.text = 'Shop All Coca Cola products';
    this.url = 'https://www.yourcoca-cola.co.uk/shop.list?pageNumber=1&facetFilters=en_brand_content:Coca-Cola+Original+Taste';
    this.image = 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/09/Coca-cola-banner-1920x700-073909.png';
    shadow.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>
      .hero-banner-a-button {
        background: #f4af00;
        padding: 11.2px 40px 12.8px;
        border-radius: 24px;
        display: block;
      }
      @media (min-width: 768px) {
        .hero-banner-a-button {
          position:relative;
          bottom:75px;
          display: inline-block;
        }
      }
    </style>
    <div class="container text-center mt-5 mb-5">
      <img src="${this.image}" class="img-fluid" />
      <a class="btn btn-light mt-3 hero-banner-a-button" href="${this.url}">${this.text}</a>
    </div>
    `;
  }
}*/

class HeroBannerB extends HTMLElement {
  template = () => `
    <img src="${this.image}" class="img-fluid" />
    <div class="container mt-3 p-4 hero-banner-b-form" 
      style="background: ${this.textBgColor}">
      <h6 style="font-size: ${this.headingSize}; color: ${this.headingColor}; ">${this.heading}</h6>
      <p style="font-size: ${this.textSize}; color: ${this.textColor};">${this.text}</p>
      <a href="${this.buttonUrl}" class="btn btn-primary" 
        style="color: ${this.buttonFontColor}; background: ${this.buttonBgColor}">${this.buttonText}</a>
    </div>
  `;

  constructor() {
    super();
    this.image = 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/57/original-Brands_Banner_Desktop_1920_x_586-020057.png';
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    this.textColor = '#000000';
    this.textSize = '16px';
    this.heading = 'Enquiry Form';
    this.headingSize = '24px';
    this.headingColor = '#404040';
    this.buttonText = 'Enquire here';
    this.textBgColor = '#ffffff';
    this.buttonUrl = 'https://www.yourcoca-cola.co.uk/contact-us.list';
    this.buttonFontColor = '#ffffff';
    this.buttonBgColor = '#000000';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


class ProductCardListCarousel extends HTMLElement {
  template = () => `
  <div class="row justify-content-center">
      <div id="ProductCardListCarousel" class="carousel productCardListCarousel">
        <div class="carousel-inner">
        ${this.carouselProducts.map((p, key) => 
          `
          <div class="carousel-item productCardListItem ${ (key == this.carouselActiveKey) ? "active" : "" }">
            <div class="card text-center rounded">
              <div class="card-title">
                <span class="fw-bold">${p.midascode}</span>
              </div>
              <img src=${p.image} class="img-fluid" />
              <div class="row mb-3">
                <span class="fw-bold">${p.title}</span>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <span>${p.volume}</span>
                </div>
                <div class="col">
                  <span class="fw-bold">&pound;${p.price}</span>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <a href="#">Add to List</a>
                </div>
                <div class="col">
                  <span>RRP: ${p.rrp}</span>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col offset-6">
                  <span>POR: ${p.por}%</span>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button class="btn button productCarouselMinus" id="productCarousel_${p.midascode}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                  </svg>
                </button>
                <div class="col-3">
                  <input type="text" class="form-control text-center" id="carouselProduct${p.midascode}" value=${p.quantity} />
                </div>
                <button class="btn button productCarouselPlus" id="productCarousel_${p.midascode}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                  </svg>
                </button>
              </div>    
              <div class="p-4">
                <button type="button" class="btn btn-primary booker">Shop Now</button>
              </div>
            </div>
          </div>
          `
          ).join('')}
        </div>
        <button class="carousel-control-prev productCarouselSlide" type="button" data-bs-target="#ProductCardListCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next productCarouselSlide" type="button" data-bs-target="#ProductCardListCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  `

  constructor() {
    super();
    this.products = productsByBrand('coca-cola');
    this.carouselProducts = (!sessionStorage.getItem('carouselProducts')) ? this.products : JSON.parse(sessionStorage.getItem('carouselProducts'));
    this.carouselActiveKey = (!sessionStorage.getItem('carouselActiveKey')) ? 0 : sessionStorage.getItem('carouselActiveKey');
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;

    const carouselActiveKey = () => {
      let carousel = document.querySelectorAll('.productCardListItem');
      [...carousel].map((c, k) => {
        if (c.classList.contains('active')) {
          this.carouselActiveKey = k;
        }
      });
    };

    const productCarouselPlusMinus = (card, plusMinus) => {
      this.carouselProducts.find((product, index) => {
        if (product.midascode == card.id.split('_')[1]) {
          if (plusMinus == 'plus') {
            this.carouselProducts[index].quantity++;
            document.getElementById('carouselProduct' + '' + product.midascode).value++;
          } else {
            this.carouselProducts[index].quantity > 0 ? this.carouselProducts[index].quantity-- : false;
            document.getElementById('carouselProduct' + '' + product.midascode).value--;
          }
          sessionStorage.setItem('carouselProducts', JSON.stringify(this.carouselProducts));
        }
      });
      this.render();
    }

      let items = document.querySelectorAll('.productCardListCarousel .productCardListItem');     
      items.forEach((item) => {
        const minPerSlide = 4;
        let next = item.nextElementSibling;
        for (let i = 1; i < minPerSlide; i++) {
          if (!next) {
        	  next = items[0];
      	  }
          let cloneChild = next.cloneNode(true);
          item.appendChild(cloneChild.children[0]);
          next = next.nextElementSibling;
        }
      });
      const cardsPlus = document.querySelectorAll('.productCarouselPlus');
      const cardsMinus = document.querySelectorAll('.productCarouselMinus');
      const sliders = document.querySelectorAll('.productCarouselSlide');

      [...cardsPlus].map(p => p.addEventListener('click', () => { productCarouselPlusMinus(p, 'plus') }));
      [...cardsMinus].map(m => m.addEventListener('click', () => { productCarouselPlusMinus(m, 'minus') }));
      [...sliders].map(s => s.addEventListener('click', () => { carouselActiveKey() } ));
      
  }
}

class ProductCategory extends HTMLElement {
  template = () => `
  <div class="row mt-4">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
      <a class="text-decoration-none" href="${this.url}">  
        <div class="card text-dark h-100 text-center p-4 fw-bold" style="background: ${this.bgColor};">
          <span style="font-size: ${this.fontSize}; color: ${this.fontColor}; ">${this.text}</span>
        </div>
      </a>
    </div>
  </div>
  `;

  constructor() {
    super();
    this.text = 'Baileys Absolut Vodka & Sprite';
    this.url = 'https://www.yourcoca-cola.co.uk/absolut-vodka-and-sprite-12-x-250ml/15213058.html';
    this.fontSize = '18px';
    this.fontColor = '#f8f8f8';
    this.bgColor = '#000000';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


class ProductCategories extends HTMLElement {
  template = () => `
  <div class="row g-2 mt-4">
  ${this.categories.map(c => `
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
      <a class="text-decoration-none" href="${c.url}">
        <div class="card bg-light text-dark text-center h-100 p-4 fw-bold justify-content-center">
          <span>${c.category}</span>
        </div>
      </a>
    </div> 
  `).join('')}
  </div>`;


  constructor() {
    super();
    this.categories = productCategories;
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


class SubPageNavigation extends HTMLElement {
  
  template = () => `
  <nav class="navbar navbar-expand-lg bg-white border-bottom border-secondary mb-2">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" name="home">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" name="monster">MONSTER</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" name="cocacola">COCA COLA</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" name="fanta">FANTA</a>
      </li>
    </ul>
  </nav>
  <div class="row" id="subNavigationContent">
    
  </div>
  `;

  constructor() {
    super();
    this.subPageNavigation = subPageNavigation;
    this.render();
    const pages = this.querySelectorAll('.nav-link');
    [...pages].map(p => p.addEventListener('click', () => { this.displaySubContent(p.name) }));
    document.getElementById('#subNavigationContent').innerHTML = this.displaySubContent('home');  
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }

  displaySubContent = (name) => {
    this.subPageNavigation.find((value, index) => {
      if (value.id == name) {
        let sub = this.subPageNavigation[index];
        document.getElementById('subNavigationContent').innerHTML = `
        <div class="col-sm-12 col-md-6 bg-light p-4">
            <span class="align-middle"><h4>${sub.title}</h4>
          ${sub.text}</span>
        </div>
        <div class="col-sm-12 col-md-6 d-flex justify-content-center" style="background-color: ${value.color}">
          <img src="${sub.image}" class="img-fluid" />
        </div>
        `;
      }
    });
  }
}

class StandardCopy extends HTMLElement {
  template = () => `
    <p class="mb-4" style="font-size: ${this.headingSize}; color: ${this.headingColor}">${this.heading}</p>
    <p style="font-size: ${this.textSize}; color: ${this.textColor}">${this.text}</p>
  `;


  constructor() {
    super();
    this.heading = 'Shop your favourites';
    this.headingSize = '36px';
    this.headingColor = '#404040';
    this.text = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';
    this.textSize = '14px';
    this.textColor = '#000000';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}

class Button extends HTMLElement {
  template = () => `
    <a href="${this.url}" class="btn btn-primary" style="color: ${this.fontColor}; background: ${this.buttonBgColor}">${this.text}</button>
  `;

  constructor() {
    super();
    this.text = 'Shop all Coca-Cola products';
    this.url = 'https://www.yourcoca-cola.co.uk/shop.list?pageNumber=1&facetFilters=en_brand_content:Coca-Cola+Original+Taste|en_brand_content:Coca-Cola+Zero+Sugar';
    this.fontColor = '#000000';
    this.buttonBgColor = '#48a832';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}

class HeroImage extends HTMLElement {
  template = () => `
    <a href="${this.url}"><img src="${this.image}" class="img-fluid" alt="${this.alt}" /></a>
  `;

  constructor() {
    super();
    this.image = 'https://static.thcdn.com/images/xlarge/webp/widgets/190-en/19/original-ABBA_Brand_Page_Banner_1-012219.png';
    this.alt = 'Absolut Vodka';
    this.url = 'https://www.yourcoca-cola.co.uk/brands/absolut-vodka-sprite.list';
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;
  }
}


/* global custom functions */
const productsByBrand = (brand) => {
  return productsData.filter(p => p.brand == brand)
}


// register components
customElements.define('info-card-a', InfoCardA);
customElements.define('info-card-b', InfoCardB);
customElements.define('product-card', ProductCard);
customElements.define('product-card-list', ProductCardList);
customElements.define('product-card-list-carousel', ProductCardListCarousel);
customElements.define('product-categories', ProductCategories);
customElements.define('link-to-shop', LinkToShop);
customElements.define('hero-banner-a', HeroBannerA);
customElements.define('hero-banner-b', HeroBannerB);
customElements.define('hero-banner-carousel', HeroBannerCarousel);
customElements.define('image-card', ImageCard);
customElements.define('sub-page-navigation', SubPageNavigation);
customElements.define('custom-button', Button);
customElements.define('standard-copy', StandardCopy);
customElements.define('product-category', ProductCategory);
customElements.define('hero-image', HeroImage);
customElements.define('custom-heading', Heading);
