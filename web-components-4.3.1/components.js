class InfoCardA extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() { 
    this.innerHTML = `
    <div class="my-3">
      <div class="card h-100 shadow-lg p-3 bg-body-tertiary rounded">
        <img src="${this.getAttribute('data-image')}" alt="${this.getAttribute('data-alt')}" />
        <div class="card-body">
          <div class="p-2">
            <p style="font-size: ${this.getAttribute('data-headingSize')}; color: ${this.getAttribute('data-headingColor')}">${this.getAttribute('data-heading')}</p>
          </div>
          <div class="p-2">
            <p style="font-size: ${this.getAttribute('data-textSize')}; color: ${this.getAttribute('data-textColor')}; ">${this.getAttribute('data-text')}</p>
          </div>
          <div class="p-2">
            <a href="${this.getAttribute('data-url')}" class="btn infoCardABtn" style="background: ${this.getAttribute('data-buttonBgColor')}; color: ${this.getAttribute('data-buttonFontColor')};">${this.getAttribute('data-buttonText')}</a>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}


class InfoCardB extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="my-3">
     <div class="card h-100 shadow-lg p-3 rounded" style="background: ${this.getAttribute('data-cardBgColor')}">
        <img src="${this.getAttribute('data-image')}" alt="${this.getAttribute('data-alt')}" class="img-fluid" />
        <div class="card-body" style="background: ${this.getAttribute('data-centralTextBgColor')}">
          <div class="p-2">
            <h6 style="font-size: ${this.getAttribute('data-headingSize')}; color: ${this.getAttribute('data-headingColor')};">${this.getAttribute('data-heading')}</h6>
          </div>
          <div class="p-2">
            <p style="font-size: ${this.getAttribute('data-textSize')}; color: ${this.getAttribute('data-textColor')};">${this.getAttribute('data-text')}</p>
          </div>
          <div class="p-2">
            <a href="${this.getAttribute('data-url')}" class="text-decoration-none" style="color: ${this.getAttribute('data-urlColor')};">${this.getAttribute('data-urlText')} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></a>
          </div>
        </div>
      </div>
    </div>
  `;
  }
}



/*class ProductCard extends HTMLElement {

  constructor() {
    super();
    this.quantity = 0;  
  }

  template = () => `
  <style>
    * {
      font-family: 'Lato'
    }

    .booker, .booker:hover {
      background: #2356AA;
      color: #fff;
      border: 0;  
    }

    .price {
      font-size: 20px;
      font-weight: 700;
    }

    .rrp, .por {
      font-weight: 700;
      color: #676767;
    }
      .productCardQuantity {
        width: 3em;
      }


  </style>
  <div class="container mt-5 mb-5 text-center">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
        <div class="card mx-auto h-100 shadow-lg p-3 mb-5 rounded">
          <div class="card-title">
            <p class="font-weight-bold">${this.getAttribute('data-midascode')}</p>
          </div>
          <img src=${this.getAttribute('data-image')} class="mb-5" />
          <div class="row mb-3">
            <div class="col">
              <p class="font-weight-bold">${this.getAttribute('data-description')}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              ${this.getAttribute('data-volume')}
            </div>
            <div class="col">
              <p class="price">&pound;${this.getAttribute('data-price')}</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <a href="#"><img class="list-img imagenIni ml-auto" src="https://www.booker.co.uk/images/list-alt.png" alt="box"> Add to List</a>
            </div>
            <div class="col">
              <p class="rrp">RRP: ${this.getAttribute('data-rrp')}</p>
            </div>
          </div>
          <div class="row">
            <div class="col offset-6">
              <p class="por">POR: ${this.getAttribute('data-por')}%</p>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn button productCardMinus" value="minus">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2356AA" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
              </svg>
            </button>
            <input type="text" maxlength="3" class="form-control text-center productCardQuantity p-0" id="productCardQuantity" value=${this.quantity} />
            
            <button class="btn button productCardPlus" value="plus">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2356AA" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                </svg>
            </button>
          </div>  
          <div class="p-4">
        <button type="button" class="btn booker">Shop Now</button>
      </div>
    </div>
  </div>
</div>
</div>
  `;

  connectedCallback() {
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
    this.quantity = document.getElementById('productCardQuantity').value;
    this.quantity++;
    this.render();
  }

  productCardMinusClick = () => {
    this.quantity = document.getElementById('productCardQuantity').value;
    this.quantity > 0 ? this.quantity-- : false;
    this.render();
  }

}*/

class ProductCard extends HTMLElement {

  constructor() {
    super();
  }

  template = () => `
  <style>
    * {
      font-family: 'Lato'
    }

    .booker, .booker:hover {
      background: #2356AA;
      color: #fff;
      border: 0;  
    }

    .price {
      font-size: 20px;
      font-weight: 700;
    }

    .rrp, .por {
      font-weight: 700;
      color: #676767;
    }
      .productCardQuantity {
        width: 3em;
      }


  </style>
  <div class="my-3 text-center">
   
        <div class="card mx-auto h-100 shadow-lg p-3 rounded" id="productCard_${this.getAttribute('data-midascode')}">
          <div class="card-title m-0">
            <span class="font-weight-bold">${this.getAttribute('data-midascode')}</span>
          </div>
          <img src=${this.getAttribute('data-image')} class="my-3" />
          <div class="row my-3">
            <div class="col">
              <span class="font-weight-bold">${this.getAttribute('data-description')}</span>
            </div>
          </div>
          <div class="row my-3">
            <div class="col">
              <span>${this.getAttribute('data-volume')}</span>
            </div>
            <div class="col my-3">
              <span class="price">&pound;${this.getAttribute('data-price')}</span>
            </div>
          </div>
          <div class="row my-3">
            <div class="col">
              <a href="/Products/ShoppingList/AddProduct?productCode=${this.getAttribute('data-midascode')}&returnUrl=${window.location.href}"><img class="list-img imagenIni ml-auto" src="https://www.booker.co.uk/images/list-alt.png" alt="box"> Add to List</a>
            </div>
            <div class="col">
              <span class="rrp">RRP: ${this.getAttribute('data-rrp')}</span>
            </div>
          </div>
          <div class="row my-3">
            <div class="col offset-6">
              <span class="por">POR: ${this.getAttribute('data-por')}%</span>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn button productCardMinus" value="minus">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2356AA" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
              </svg>
            </button>
            <input type="text" maxlength="3" class="form-control text-center productCardQuantity p-0" id="productCardQuantity_${this.midasCode}" value=${this.quantity} />
            
            <button class="btn button productCardPlus" value="plus">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#2356AA" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                </svg>
            </button>
          </div>  
    </div>
</div>
  `;

  connectedCallback() {
    this.quantity = this.getAttribute('data-quantity');
    this.midasCode = this.getAttribute('data-midascode');
    this.timeoutProducts = {};
    this.render();
  }
 
  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;

   
   const plus = this.querySelectorAll('.productCardPlus');
   const minus = this.querySelectorAll('.productCardMinus');
   const productCardQuantity = this.querySelectorAll('.productCardQuantity');
   
    [...plus].map((p, index) => p.addEventListener('click', () => {
      this.productCardPlusMinus('plus');
    }));
    [...minus].map((m, index) => m.addEventListener('click', () => {
      this.productCardPlusMinus('minus');
    }));

    [...productCardQuantity].map((product, index) => product.addEventListener('change', () => { this.productCardInputQuantity(product, index) }));
  }
  
  productCardPlusMinus = (direction) => {
    direction == 'plus' ? this.quantity++ : direction == 'minus' && this.quantity > 0 ? this.quantity-- : false;
    this.render();
    this.bookerTrolleyFunc(this.midasCode, this.quantity);
  }

  productCardInputQuantity = (product, index) => {
    this.quantity = product.value;
    this.render();
    this.bookerTrolleyFunc(this.midasCode, this.quantity);
  }

  bookerTrolleyFunc = (midasCode, quantity, supplierId = 0) => {
    if (this.timeoutProducts[midasCode] !== null) {
      clearTimeout(this.timeoutProducts[midasCode]);
    }
    this.timeoutProducts[midasCode] = setTimeout((midasCode, quantity) => {
      UpdateTrolley2(midasCode,  quantity, supplierId);
    }, 500, midasCode, quantity);
  }

}


class HeroBannerCarousel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    .carousel-control-prev, .carousel-control-next{
      width: 4vh;
      height: 4vh;
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
      background: ${this.getAttribute('data-arrowBgColor')};
    }
    
    </style>
    <div class="position-relative text-center my-3">
      <div id="HeroBannerCarousel" class="carousel" data-interval="false">
        <div class="carousel-inner">
        ${JSON.parse(this.getAttribute('data-hero-banner-carousel')).map((val, key) => `
          <div class="carousel-item ${key == 0 ? "active" : ""}">
            <a href="${val.url}"><img src="${val.image}" class="d-block w-100" alt="${val.alt}"></a>
          </div>
        `)}
      </div>
      ${this.getAttribute('data-arrowShow') == 'true' ? `
      <a class="carousel-control-prev" type="button" data-target="#HeroBannerCarousel" data-slide="prev">
        <svg xmlns="http://www.w3.org/2000/svg" fill="${this.getAttribute('data-arrowColor')}" viewBox="0 0 8 8"><path d="M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z" /></svg>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" type="button" data-target="#HeroBannerCarousel" data-slide="next">
        <svg xmlns='http://www.w3.org/2000/svg' fill="${this.getAttribute('data-arrowColor')}" viewBox="0 0 8 8"><path d="M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z" /></svg>
        
        <span class="sr-only">Next</span>
      </a>` : ``}
    </div>
  </div>`;
  }
}


class Heading extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container text-center mt-5 mb-5">
      <h1 class="display-6" style="color: ${this.getAttribute('data-fontColor')}; font-size: ${this.getAttribute('data-fontSize')}">${this.getAttribute('data-heading')}</h1>
    </div>
    `;
  }
}


class ProductCardList extends HTMLElement {
  constructor() {
    super();
  }

  template = () => `
  <style>
    * {
      font-family: 'Lato';
    }
    .card {
      margin: 0 .25em;
      box-shadow: 2px 6px 15px 0 rgba(22, 22, 26, 0.18);
      border: none;
    }
    .booker, .booker:hover {
      background: #2356AA;
      color: #fff;
      border: 0;  
    }

    .price {
      font-size: 20px;
      font-weight: 700;
    }

    .rrp, .por {
      font-weight: 700;
      color: #676767;
    }
    
    .addToList {
      font-size: 0.7rem;
    }

    [id*='productCardListQuantity'] {
      width: 3rem;
    }
  </style>
  <div class="my-3">
    <div class="row">
    ${this.products.data.map((p, key) => `
    <div class="col-sm-12 col-md-6 col-lg-3 my-3 p-1">
      <div class="card p-3 h-100 text-center rounded productCardList" id="productCardList_${this.products.id}_${key}_${p.midascode}">
        <div class="card-title m-0">
          <span class="font-weight-bold">${p.midascode}</span>
        </div>
        <img src=${p.image} class="my-3" />
        <div class="row my-3">
          <div class="col-12">
            <span class="font-weight-bold">${p.title}</span>
          </div>
        </div>
        <div class="d-flex flex-row my-3">
          <div class="col p-0">
            <span class="font-weight-bold">${p.volume}</span>
          </div>
          <div class="col p-0">
            <span class="font-weight-bold price">&pound;${p.price}</span>
          </div>
        </div>
        <div class="d-flex flex-row my-3">
          <div class="col p-0">
            <a href="/Products/ShoppingList/AddProduct?productCode=${p.midascode}&returnUrl=${window.location.href}" class="addToList"><img class="list-img imagenIni ml-auto" src="https://www.booker.co.uk/images/list-alt.png" alt="box"> Add to List</a>
          </div>
          <div class="col p-0">
            <span class="rrp">RRP: ${p.rrp}</span>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-6 offset-6 p-0">
            <span class="por">POR: ${p.por}%</span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="btn rounded-circle booker plus-minus-icon productCardListMinus" id="${p.midascode}">
            <i class="fas fa-minus"></i>
          </div>
          <input type="text" maxlength="3" class="form-control text-center mx-2 p-0 productCardListProducts" id="${this.products.id}_productCardListQuantity_${key}" value=${p.quantity} />
           <div class="btn rounded-circle booker plus-minus-icon productCardListPlus" id="${p.midascode}">
            <i class="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
    `).join('')}
    </div>
  </div>
</div>
    `;
  
  connectedCallback() {
    this.products = JSON.parse(this.getAttribute('data-product-card-list'));
    this.timeoutProducts = {};
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;

    const plus = this.querySelectorAll('.productCardListPlus');
    const minus = this.querySelectorAll('.productCardListMinus');
    const productCardListproducts = this.querySelectorAll('.productCardListProducts');
    [...plus].map((p, index) => p.addEventListener('click', () => { this.productCardListClick(p, index, 'plus') }));
    [...minus].map((m, index) => m.addEventListener('click', () => { this.productCardListClick(m, index, 'minus') }));

    [...productCardListproducts].map((product, index) => product.addEventListener('change', () => { this.productCardListInputQuantity(product, index) }));
  }

  productCardListClick = (product, index, direction) => {
    let productCardListId = (product.parentElement.parentElement) ? product.parentElement.parentElement.id : false;
    let key = productCardListId.split('_')[2];
    let midasCode = productCardListId.split('_')[3];
    direction == 'plus' ? this.products.data[key].quantity++ : direction == 'minus' && this.products.data[key].quantity > 0 ? this.products.data[key].quantity-- : false;
    let quantity = this.products.data[key].quantity;
    this.render(); 
    this.bookerTrolleyFunc(midasCode, quantity);
  }

  productCardListInputQuantity = (product) => {
    let key = (product.parentElement.parentElement) ? product.parentElement.parentElement.id.split('_') : false;
    let midasCode = key[3];
    this.products.data[key[2]].quantity = product.value;
    let quantity = this.products.data[key[2]].quantity;
    this.render();
    this.bookerTrolleyFunc(midasCode, quantity);
  }

  bookerTrolleyFunc = (midasCode, quantity, supplierId = 0) => {
    if (this.timeoutProducts[midasCode] !== null) {
      clearTimeout(this.timeoutProducts[midasCode]);
    }
    this.timeoutProducts[midasCode] = setTimeout((midasCode, quantity) => {
      UpdateTrolley2(midasCode,  quantity, supplierId);
    }, 500, midasCode, quantity);
  }
}


class LinkToShop extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container mt-5 mb-5">
      <div class="row mb-3">
        <a href="${this.getAttribute('data-url')}" target="_blank"><img src="${this.getAttribute('data-image')}" class="img-fluid" alt="${this.getAttribute('data-alt')}"></a>
      </div>
      <div class="row">
        <a href="${this.getAttribute('data-url')}">${this.getAttribute('data-name')} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </a>
      </div>
    </div>
    `;
  }
}

class ImageCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container text-center mt-5 mb-5">
      <div>
        <img src="${this.getAttribute('data-image')}" class="img-fluid" />
      </div>
      <a href="${this.getAttribute('data-url')}" class="btn" style="color: ${this.getAttribute('data-fontColor')}; background: ${this.getAttribute('data-buttonBgColor')}; position: relative; bottom: 50px; padding-left: 25px; padding-right: 25px;">${this.getAttribute('data-buttonText')}</a>
    </div>
    `;
  }
}

class HeroBannerA extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
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
    <div class="container justify-content-center text-center mt-5 mb-5">
      <img src="${this.getAttribute('data-image')}" class="img-fluid" />
        <a class="btn mt-3 hero-banner-a-button" href="${this.getAttribute('data-url')}">${this.getAttribute('data-text')}</a>
    </div>
    `;
  }
}

class HeroBannerB extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
      @media (min-width: 992px) {
        .hero-banner-b-form {
          position:absolute;
          top: 50%;
          left: 50%;
          opacity: 0.7;
          transform: translate(-50%, -50%);
          width: 75%;
        }
      }
      </style>
      <div class="container position-relative text-center mt-5 mb-5 hero-banner-b">
        <img src="${this.getAttribute('data-image')}" class="img-fluid" />
        <div class="container mt-3 p-4 hero-banner-b-form" style="background: ${this.getAttribute('data-textBgColor')}">
          <h6 style="font-size: ${this.getAttribute('data-headingSize')}; color: ${this.getAttribute('data-headingColor')}; ">
            ${this.getAttribute('data-heading')}
          </h6>
          <p style="font-size: ${this.getAttribute('data-textSize')}; color: ${this.getAttribute('data-textColor')};">
            ${this.getAttribute('data-text')}
          </p>
          <a href="${this.getAttribute('data-buttonUrl')}" class="btn" style="color: ${this.getAttribute('data-buttonFontColor')}; background: ${this.getAttribute('data-buttonBgColor')}">
            ${this.getAttribute('data-buttonText')}
          </a>
        </div>
      </div>
    `;
  }
}


class ProductCardListCarousel extends HTMLElement {
  constructor() {
    super();
  }

  template = () => `
  <style>
  .carousel-control-next-icon, .carousel-control-prev-icon {
    background-color: #2356AA;
  }
  .carousel-control-prev, .carousel-control-next{
    width: 4vh;
    height: 4vh;
    top: 50%;
    transform: translateY(-50%);
    opacity: 1;
  }
  .carousel-inner {
    overflow: visible;
  }

  .card {
    margin: 0 .25rem;
  }

  .price {
      font-size: 20px;
      font-weight: 700;
    }

    .rrp, .por {
      font-weight: 700;
      color: #676767;
    }
    
    .addToList {
      font-size: 0.7rem;
    }

  a {
    color: #2356AA;
  }

  .booker, .booker:hover {
    background: #2356AA;
    color: #fff;
    border: 0;  
  }

  .productCardListCarouselQuantity {
    width: 3rem;
  }


.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

@media (max-width: 768px) {
  .carousel-inner .carousel-item > div {
      display: none;
  }
  .carousel-inner .carousel-item > div:first-child {
      display: block;
  }
}

@media (min-width: 200px) and (max-width: 767.98px) {
  .carousel-inner .carousel-item > div {
      display: none;
  }
  .carousel-inner .carousel-item > div:first-child {
      display: block;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) { 
  .carousel-inner .carousel-item > div {
      display: none;
  }
  .carousel-inner .carousel-item > div:first-child, .carousel-inner .carousel-item > div:nth-child(2) {
      display: block;
  }
}

  </style>
  <div class="my-3">
    <div class="row justify-content-center">
      <div id="ProductCardListCarousel${this.products.id}" class="carousel productCardListCarousel my-3" data-interval="false">
        <div class="carousel-inner">
        ${this.products.data.map((p, key) => 
          `
          <div class="carousel-item productCardListItem ${ (key == this.carouselActiveKey) ? "active" : "" }">
               
            <div class="card p-3 text-center rounded product${key}" id="${this.products.id}_productCardListCarousel_${key}">
              <div class="d-flex flex-row my-3">
                <div class="col">
                  <div class="card-title m-0">
                    <span class="font-weight-bold">${p.midascode}</span>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-row my-3">
                <div class="col">
                  <img src=${p.image} class="img-fluid" />
                </div>
              </div>
              <div class="d-flex flex-row my-3">
                <div class="col">
                  <span class="font-weight-bold">${p.title}</span>
                </div>
              </div>
              <div class="d-flex flex-row my-3">
                <div class="col p-0">
                  <span class="font-weight-bold">${p.volume}</span>
                </div>
                <div class="col">
                  <span class="font-weight-bold price">&pound;${p.price}</span>
                </div>
              </div>
              <div class="d-flex flex-row my-3">
                <div class="col p-0">
                  <a href="/Products/ShoppingList/AddProduct?productCode=${p.midascode}&returnUrl=${window.location.href}" class="addToList"><img class="list-img imagenIni ml-auto" src="https://www.booker.co.uk/images/list-alt.png" alt="box"> Add to List</a>
                </div>
                <div class="col p-0">
                  <span class="rrp">RRP: ${p.rrp}</span>
                </div>
              </div>
              <div class="row my-3">
                <div class="col-6 offset-6 p-0">
                  <span class="por">POR: ${p.por}%</span>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <div class="btn rounded-circle booker plus-minus-icon productCarouselMinus" id="${this.products.id}_productCarouselMinus_${key}">
                  <i class="fas fa-minus"></i>
                </div>
                <input type="text" maxlength="3" class="form-control text-center carouselProducts align-middle productCardListCarouselQuantity mx-2 p-0" id="${this.products.id}_carouselProduct_${key}" value=${p.quantity} />
                <div class="btn rounded-circle booker plus-minus-icon productCarouselPlus" id="${this.products.id}_productCarouselPlus_${key}">
                  <i class="fas fa-plus"></i>
                </div>
              </div>    
            </div>
          </div>
          `
          ).join('')}
        </div>
        <a class="carousel-control-prev productCarouselSlide" type="button" data-target="#ProductCardListCarousel${this.products.id}" data-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <a class="carousel-control-next productCarouselSlide" type="button" data-target="#ProductCardListCarousel${this.products.id}" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>
  </div>`;

  connectedCallback() {
    this.products = JSON.parse(this.getAttribute('data-product-card-list-carousel'));
    this.carouselActiveKey = 0;
    this.timeoutProducts = {};
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.template().trim()}
    `;


    let items = this.querySelectorAll('.productCardListCarousel .productCardListItem');
    
    const minPerSlide = 4;
    items.forEach((item) => {
      let next = item.nextElementSibling;
      
      for (let i = 0; i < minPerSlide - 1; i++) {
        if (!next) {
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        item.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });

    
    const cardsPlus = this.querySelectorAll('.productCarouselPlus');
    const cardsMinus = this.querySelectorAll('.productCarouselMinus');
    const sliders = this.querySelectorAll('.productCarouselSlide');
    const carouselProducts = this.querySelectorAll('.carouselProducts');
    
    [...cardsPlus].map((p) => p.addEventListener('click', () => { productCarouselPlusMinus(p, 'plus') }));
    [...cardsMinus].map((m) => m.addEventListener('click', () => { productCarouselPlusMinus(m, 'minus') }));
    [...sliders].map((s) => s.addEventListener('click', () => { carouselActiveKey(s.attributes['data-slide'].value) } ));
    [...carouselProducts].map((product) => product.addEventListener('change', () => { productCarouselInput(product) } ));

    const bookerTrolleyFunc = (midasCode, quantity, supplierId = 0) => {
      if (this.timeoutProducts[midasCode] !== null) {
        clearTimeout(this.timeoutProducts[midasCode]);
      }
      this.timeoutProducts[midasCode] = setTimeout((midasCode, quantity) => {
        UpdateTrolley2(midasCode,  quantity, supplierId);
      }, 500, midasCode, quantity);
    }

    const carouselActiveKey = (direction, index) => {
      let carousel = this.querySelectorAll('.productCardListCarousel .productCardListItem');
        if (direction == 'next') {
            if (this.carouselActiveKey == carousel.length - 1) {
              this.carouselActiveKey = 0;  
            } else {
              this.carouselActiveKey++;
            }
          }
          if (direction == 'prev') {
            if (this.carouselActiveKey == 0) {
              this.carouselActiveKey = carousel.length - 1;
            } else {
              this.carouselActiveKey--;
            }
          }

    };

    const productCarouselInput = (product) => {
      let key = getKeysFromId(product.id);
      this.products.data[key.productKey].quantity = product.value;
      let quantity = this.products.data[key.productKey].quantity;
      let midasCode = this.products.data[key.productKey].midascode;
      this.render();
      bookerTrolleyFunc(midasCode, quantity);
    }
    
    const productCarouselPlusMinus = (product, plusMinus) => {
      let key = getKeysFromId(product.id);
      plusMinus == 'plus' ? this.products.data[key.productKey].quantity++ : plusMinus == 'minus' && this.products.data[key.productKey].quantity > 0 ? this.products.data[key.productKey].quantity-- : false;
      let quantity = this.products.data[key.productKey].quantity;
      let midasCode = this.products.data[key.productKey].midascode;
      this.render();
      bookerTrolleyFunc(midasCode, quantity);
    }

    const getKeysFromId = (id) => {
      let keys = [];
      keys['carouselKey'] = id.split('_')[0];
      keys['productKey'] = id.split('_')[2];
      return keys;
    }
  }
}



class ProductCategory extends HTMLElement {
  constructor() {
    super();  
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container mt-5 mb-5">
      <div class="row mt-4">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
          <a class="text-decoration-none" href="${this.getAttribute('data-url')}">  
            <div class="card text-dark h-100 text-center p-4 font-weight-bold" style="background: ${this.getAttribute('data-bgColor')};">
              <span style="font-size: ${this.getAttribute('data-fontSize')}; color: ${this.getAttribute('data-fontColor')}; ">${this.getAttribute('data-text')}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    `;
  }
}



class ProductCategories extends HTMLElement { 
  constructor() {
    super();
  }

  connectedCallback() {
    let categories = JSON.parse(this.getAttribute("data-categories"));
    this.innerHTML = `
    <div class="container mt-5 mb-5">
      <div class="row"> 
      ${categories.map(c => `
        <div class="col-sm-12 col-md-6 col-lg-3 mx-auto mb-3">
          <a class="text-decoration-none" href="${c.url}">
            <div class="card bg-light text-dark text-center h-100 p-4 font-weight-bold justify-content-center">
              ${c.category}
            </div>  
          </a>
        </div>
      `).join("")}
      </div>
    </div>
    `;
  }
}


class SubPageNavigation extends HTMLElement {
  template = () => `
  <div class="container mt-5 mb-5">
    <nav class="navbar navbar-expand-md navbar-expand-lg bg-white border-bottom border-secondary mb-2 p-0" id="subNavigationContentNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        ${this.subPageNavigation.map(s => `
          <li class="nav-item">
            <a class="nav-link text-dark" name="${s.id}" href="#">${s.title}</a>
          </li>`).join("")}
      </ul>
    </nav>
    <div class="row" id="subNavigationContent">
    </div>
  </div>
  `;

  constructor() {
    super();
  }

  connectedCallback() {
    this.subPageNavigation = JSON.parse(this.getAttribute('data-sub-page-navigation'));
    this.render();
    const pages = this.querySelectorAll('.nav-link');
    [...pages].map(p => p.addEventListener('click', () => { this.displaySubContent(p.name) }));
    this.displaySubContent('home');
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
            <p class="align-middle"><h4>${sub.title}</h4>
          ${sub.text}</p>
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
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container text-center mt-5 mb-5">
      <p class="mb-4" style="font-size: ${this.getAttribute('data-headingSize')}; color: ${this.getAttribute('data-headingColor')}">
        ${this.getAttribute('data-heading')}
      </p>
      <p style="font-size: ${this.getAttribute('data-textSize')}; color: ${this.getAttribute('data-textColor')}">
        ${this.getAttribute('data-text')}
      </p>
    </div>
    `;
  }
}


class Button extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container text-center mt-5 mb-5">
      <a href="${this.getAttribute('data-url')}" class="btn" style="color: ${this.getAttribute('data-fontColor')}; background: ${this.getAttribute('data-buttonBgColor')}">${this.getAttribute('data-text')}</a>
    </div>
    `;
  }
}


class HeroImage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container text-center mt-5 mb-5">
      <img src="${this.getAttribute('data-image')}" class="img-fluid" alt="${this.getAttribute('data-alt')}" />
    </div>
    `;
  }
}

class LinkToShopSearch extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="my-3">
      <div class="d-flex">
        <div class="linkToShopSearchImg mr-2">
          <img src="${this.getAttribute('data-img')}" style="max-width: 100px;" />
        </div>
        <div class="linkToShopSearchTextContent">
          <div class="row">
            <div class="col-12">
              <h5 class="font-weight-bold">${this.getAttribute('data-headingText')}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-12"> 
              <a href="${this.getAttribute('data-url')}" class="font-weight-bold"> ${this.getAttribute('data-urlText')}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
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
customElements.define('link-to-shop-search', LinkToShopSearch);
