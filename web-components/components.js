class InfoCardA extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() { 
    this.innerHTML = `
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
          <div class="card h-100 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <img src="${this.getAttribute('data-image')}" alt="${this.getAttribute('data-alt')}" />
            <div class="card-body">
              <div class="p-4">
                <p class="h6" style="font-size: ${this.getAttribute('data-headingSize')}; color: ${this.getAttribute('data-headingColor')}">${this.getAttribute('data-heading')}</h6>
              </div>
              <div class="p-4">
                <p style="font-size: ${this.getAttribute('data-textSize')}; color: ${this.getAttribute('data-textColor')}; ">${this.getAttribute('data-text')}</p>
              </div>
              <div class="p-4">
                <a href="${this.getAttribute('data-url')}" class="btn btn-primary infoCardABtn" style="background: ${this.getAttribute('data-buttonBgColor')}; color: ${this.getAttribute('data-buttonFontColor')};">${this.getAttribute('data-buttonText')}</a>
              </div>
            </div>
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
    <div class="container mb-5">
      <div class="row">
        <div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
          <div class="card h-100 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <img src="${this.getAttribute('data-image')}" alt="${this.getAttribute('data-alt')}" class="img-fluid" />
          <div class="card-body" style="background: ${this.getAttribute('data-cardBgColor')}">
            <div class="p-4">
              <h6 style="font-size: ${this.getAttribute('data-headingSize')}; color: ${this.getAttribute('data-headingColor')};">${this.getAttribute('data-heading')}</h6>
            </div>
            <div class="p-4">
              <p style="font-size: ${this.getAttribute('data-textSize')}; color: ${this.getAttribute('data-textColor')};">${this.getAttribute('data-text')}</p>
            </div>
            <div class="p-4">
              <a href="${this.getAttribute('data-url')}" class="text-decoration-none" style="color: ${this.getAttribute('data-urlColor')};">${this.getAttribute('data-urlText')} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/></svg></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  }
}

class ProductCard extends HTMLElement {

  constructor() {
    super();
    this.quantity = 0;  
  }

  template = () => `
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-sm-12 col-md-8 col-lg-6 mx-auto">
        <div class="card mx-auto h-100 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
          <div class="card-title">
            <span class="fw-bold">${this.getAttribute('data-midascode')}</span>
          </div>
          <img src=${this.getAttribute('data-image')} class="mb-5" />
          <div class="row mb-3">
            <span class="fw-bold">${this.getAttribute('data-description')}</span>
          </div>
          <div class="row mb-3">
            <div class="col">
              ${this.getAttribute('data-volume')}
            </div>
            <div class="col">
              <div class="fw-bold">&pound;${this.getAttribute('data-price')}</div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <a href="#">Add to List</a>
            </div>
            <div class="col">
              <span>RRP: ${this.getAttribute('data-rrp')}</span>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col offset-6">
              <span>POR: ${this.getAttribute('data-por')}%</span>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn button productCardMinus">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
              </svg>
            </button>
            <div class="col-2">
              <input type="text" class="form-control text-center productCardQuantity" id="productCardQuantity" value=${this.quantity} />
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

}

class HeroBannerCarousel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    .carousel-control-prev, .carousel-control-next{
      width: 5vh;
      height: 5vh;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      opacity: 1;
    }
    </style>
    <div class="container position-relative text-center mt-5 mb-5">
      <div id="HeroBannerCarousel" class="carousel">
        <div class="carousel-inner">
        ${JSON.parse(this.getAttribute('data-hero-banner-carousel')).map((val, key) => `
          <div class="carousel-item ${key == 0 ? "active" : ""}">
            <a href="${val.url}"><img src="${val.image}" class="d-block w-100" alt="${val.alt}"></a>
          </div>
        `)}
      </div>
      ${this.getAttribute('data-arrowShow') == 'true' ? `
      <button class="carousel-control-prev" type="button" data-bs-target="#HeroBannerCarousel" data-bs-slide="prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="${this.getAttribute('data-arrowBgColor')}" class="bi bi-arrow-left-circle-fill" viewBox="-1 -1 20 20">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" stroke="${this.getAttribute('data-arrowColor')}"/>
        </svg>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#HeroBannerCarousel" data-bs-slide="next">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="${this.getAttribute('data-arrowBgColor')}" class="bi bi-arrow-right-circle-fill" viewBox="-3 -1 20 20">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" stroke="${this.getAttribute('data-arrowColor')}"/>
        </svg>
        <span class="visually-hidden">Next</span>
      </button>` : ``}
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
    .card {
      margin: 0 .5em;
      box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
      border: none;
    }
  </style>
  <div class="container mt-5 mb-5">
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
    `).join("")}
    </div>
  </div>
</div>
`;
  
  connectedCallback() {
    this.products = JSON.parse(this.getAttribute('data-product-card-list'));
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
      <a href="${this.getAttribute('data-url')}" class="btn btn-light" style="color: ${this.getAttribute('data-fontColor')}; background: ${this.getAttribute('data-buttonBgColor')}; position: relative; bottom: 50px; padding-left: 25px; padding-right: 25px;">${this.getAttribute('data-buttonText')}</a>
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
        <a class="btn btn-light mt-3 hero-banner-a-button" href="${this.getAttribute('data-url')}">${this.getAttribute('data-text')}</a>
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
      @media (min-width: 768px) {
        .hero-banner-b-form {
          position:absolute;
          top: 60%;
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
          <a href="${this.getAttribute('data-buttonUrl')}" class="btn btn-primary" style="color: ${this.getAttribute('data-buttonFontColor')}; background: ${this.getAttribute('data-buttonBgColor')}">
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
    background-color: #000;
  }
  .carousel-inner {
    overflow: visible;
  }

  .carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
}

.carousel-inner .carousel-item-end,
.carousel-inner .carousel-item-start { 
  transform: translateX(0);
}

@media (max-width: 768px) {
  .carousel-inner .carousel-item > div {
      display: none;
  }
  .carousel-inner .carousel-item > div:first-child {
      display: block;
  }
}


@media (min-width: 768px) {
  .carousel-inner .carousel-item-end.active,
  .carousel-inner .carousel-item-next {
    transform: translateX(25%);
  }
  
  .carousel-inner .carousel-item-start.active, 
  .carousel-inner .carousel-item-prev {
    transform: translateX(-25%);
  }
}
  </style>
  <div class="container mt-5 mb-5">
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
  </div>`;

  connectedCallback() {
    this.products = JSON.parse(this.getAttribute('data-product-card-list-carousel'));
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
  constructor() {
    super();  
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="container mt-5 mb-5">
      <div class="row mt-4">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
          <a class="text-decoration-none" href="${this.getAttribute('data-url')}">  
            <div class="card text-dark h-100 text-center p-4 fw-bold" style="background: ${this.getAttribute('data-bgColor')};">
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
      <div class="row g-2 mt-4"> 
      ${categories.map(c => `
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 mx-auto">
          <a class="text-decoration-none" href="${c.url}">
          <div class="card bg-light text-dark text-center h-100 p-4 fw-bold justify-content-center">
            <span>${c.category}</span>
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
    <nav class="navbar navbar-expand-lg bg-white border-bottom border-secondary mb-2">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        ${this.subPageNavigation.map(s => `<li class="nav-item">
          <a class="nav-link" name="${s.id}">${s.title}</a>
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
      <a href="${this.getAttribute('data-url')}" class="btn btn-primary" style="color: ${this.getAttribute('data-fontColor')}; background: ${this.getAttribute('data-buttonBgColor')}">${this.getAttribute('data-text')}</a>
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
      <a href="${this.getAttribute('data-url')}"><img src="${this.getAttribute('data-image')}" class="img-fluid" alt="${this.getAttribute('data-alt')}" /></a>
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
