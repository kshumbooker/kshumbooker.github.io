const branches = [
  {
    id: 503,
    name: 'Kettering',
    distance: 20.92,
    isOpened: true,
    open: 'Monday 8:30AM',
    close: '3:00PM',
    lat: 52.4090884,
    lon: -0.7196247
  },
{
id: 266,
name: 'Northampton',
distance: 30.13,
isOpened: false,
open: 'Monday 10:00AM',
close: '4:00PM',
lat: 52.2481206,
lon: -1.1024259
},
{
id: 316,
name: 'Peterborough',
distance: 2.51,
isOpened: true,
open: 'Tuesday 9:00AM',
close: '5:00PM',
lat: 52.5548845,
lon: -0.2641662
},
{
id: 329,
name: 'Luton',
distance: 25.02,
isOpened: true,
open: 'Monday 9:00AM',
close: '6:00PM',
lat: 51.9220378,
lon: -1.6340446
},
{
id: 533,
name: 'Bedford',
distance: 26.52,
isOpened: false,
open: 'Monday 7:45AM',
close: '7:00PM',
lat: 52.1487477,
lon: -0.4228694
},
{
id: 533,
name: 'Cambridge',
distance: 28.53,
isOpened: true,
open: 'Monday 7:45AM',
close: '2:00PM',
lat: 52.1958316,
lon: 0.164765
},
{
id: 144,
name: 'Great Yarmouth',
distance: 123.00,
isOpened: true,
open: 'Monday 7:45AM',
close: '2:00PM',
lat: 52.6111495,
lon: 1.7131574
},
{
  id: 305,
  name: 'Rugby',
  distance: 123.00,
  isOpened: true,
  open: 'Monday 7:45AM',
  close: '2:00PM',
  lat: 52.3735393,
  lon: -1.2856324
  },
  {
    id: 191,
    name: 'Warwick',
    distance: 123.00,
    isOpened: true,
    open: 'Monday 7:45AM',
    close: '2:00PM',
    lat: 52.2894239,
    lon: -1.59197
    },
    {
      id: 302,
      name: 'Coventry',
      distance: 123.00,
      isOpened: true,
      open: 'Monday 7:45AM',
      close: '2:00PM',
      lat: 52.4087804,
      lon: -1.5005229
      },
      {
        id: 331,
        name: 'Nuneaton',
        distance: 123.00,
        isOpened: true,
        open: 'Monday 7:45AM',
        close: '2:00PM',
        lat: 52.5041024,
        lon: -1.4765309
        },
        {
          id: 337,
          name: 'Birmingham Stirchley',
          distance: 123.00,
          isOpened: true,
          open: 'Monday 7:45AM',
          close: '2:00PM',
          lat: 52.4342477,
          lon: -1.9190637
        },
        {
          id: 380,
          name: 'Wolverhampton',
          distance: 123.00,
          isOpened: true,
          open: 'Monday 7:45AM',
          close: '2:00PM',
          lat: 52.56988,
          lon: -2.1053074
        },
        {
          id: 190,
          name: 'Tamworth',
          distance: 123.00,
          isOpened: true,
          open: 'Monday 7:45AM',
          close: '2:00PM',
          lat: 52.6386645,
          lon: -1.7083861
        },
        {
          id: 354,
          name: 'Saltley',
          distance: 123.00,
          isOpened: true,
          open: 'Monday 7:45AM',
          close: '2:00PM',
          lat: 52.4913606,
          lon: -1.863292
        },

];

const productsData = [
{
  midascode: 286632,
  description: 'Just Cookit BBQ Pork Rack of Ribs 450g',
  volume: 'Case of 12',
  price: 59.88,
  type: 'Chilled',
  stock: [
    {
      id: 316,
      quantity: 50
    },
    {
      id: 329,
      quantity: 20
    },
    {
      id: 503,
      quantity: 3
    },
    {
      id: 266,
      quantity: 100
    },
    {
      id: 533,
      quantity: 0
    }
  ]
},
{
  midascode: '056177',
  description: 'Turkey Butterfly Breast',
  volume: 'Case of 1',
  price: 6.49,
  type: 'Chilled',
  stock: [
    {
      id: 316,
      quantity: 24
    },
    {
      id: 329,
      quantity: 55
    },
    {
      id: 503,
      quantity: 4
    },
    {
      id: 266,
      quantity: 0
    },
    {
      id: 533,
      quantity: 33
    }
  ]
},
{
  midascode: 249725,
  description: 'Heineken 12 x 330ml',
  volume: 'Case of 1',
  price: 9.99,
  type: 'Ambient',
  stock: [
    {
      id: 316,
      quantity: 24
    },
    {
      id: 329,
      quantity: 55
    },
    {
      id: 503,
      quantity: 4
    },
    {
      id: 266,
      quantity: 0
    },
    {
      id: 533,
      quantity: 33
    }
  ]
},
{
  midascode: 126911,
  description: 'Cravendale Semi Skimmed 2L',
  volume: 'Case of 6',
  price: 12.09,
  type: 'Chilled',
  stock: [
    {
      id: 316,
      quantity: 0
    },
    {
      id: 329,
      quantity: 0
    },
    {
      id: 503,
      quantity: 2
    },
    {
      id: 266,
      quantity: 33
    },
    {
      id: 533,
      quantity: 1
    }
  ]
},
{
  midascode: 244174,
  description: 'Cornetto Ice Cream Cone Classico 120 ml',
  volume: 'Case of 24',
  price: 22.29,
  type: 'Frozen',
  stock: [
    {
      id: 316,
      quantity: 4
    },
    {
      id: 329,
      quantity: 0
    },
    {
      id: 503,
      quantity: 33
    },
    {
      id: 266,
      quantity: 0
    },
    {
      id: 533,
      quantity: 55
    }
  ]
},
{
  midascode: 260506,
  description: 'HARIBO Goldbears 160g',
  volume: 'Case of 12',
  price: 12.15,
  type: 'Ambient',
  stock: [
    {
      id: 316,
      quantity: 22
    },
    {
      id: 329,
      quantity: 22
    },
    {
      id: 503,
      quantity: 2
    },
    {
      id: 266,
      quantity: 28
    },
    {
      id: 533,
      quantity: 44
    }
  ]
},
{
  midascode: 218322,
  description: '19 Crimes Red Wine 750ml',
  volume: 'Case of 6',
  price: 37.49,
  type: 'Ambient',
  stock: [
    {
      id: 316,
      quantity: 9
    },
    {
      id: 329,
      quantity: 100
    },
    {
      id: 503,
      quantity: 200
    },
    {
      id: 266,
      quantity: 2
    },
    {
      id: 533,
      quantity: 4
    }
  ]
},
{
  midascode: 332071,
  description: 'Blakemans Supreme Sausage Thick Pork 2kg',
  volume: 'Case of 4',
  price: 35.96,
  type: 'Chilled',
  stock: [
    {
      id: 316,
      quantity: 4
    },
    {
      id: 329,
      quantity: 69
    },
    {
      id: 503,
      quantity: 20
    },
    {
      id: 266,
      quantity: 3
    },
    {
      id: 533,
      quantity: 4
    }
  ]
}
];

const filters = [
{
  status: 'In Stock'
},
{
  status: 'Low Stock',
},
{
  status: 'Out of Stock'
},
{
  status: 'Open'
},
{
  status: 'Closed'
},
{
  status: 'Retail'
},
{
  status: 'Catering'
}
];


branches.sort((a, b) => a.distance - b.distance);

/*let noStockMenuContainer = document.getElementById('rts-no-stock-menu');

noStockMenuContainer.setAttribute('data-products', JSON.stringify(products));
noStockMenuContainer.setAttribute('data-branches', JSON.stringify(branches));*/






class AddToList extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<i class="fa-solid fa-heart-circle-check fa-xl text-dark"></i>`;    
  }
}

class AddToNote extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<i class="fa-solid fa-book fa-xl text-dark"></i>`;
  }
}

class StockStatusFilter extends HTMLElement {
  constructor() {
    super();
    this.filter = this.getAttribute('data-stock-status-filter');
  }
  
  connectedCallback() {
    this.innerHTML = `<span class="text-center mw-100 d-inline-block stockStatusFilter text-white py-1 px-2 rounded mr-2 my-2" value="${this.filter}">${this.filter} <i class="fas fa-solid fa-plus"></i></span>`;
  }
}

class StockLabel extends HTMLElement {
  constructor() {
    super();
    this.status = this.getAttribute('data-stocklevel');
    this.bgcolor = this.getAttribute('data-stocklevel-bgcolor');
  }

  connectedCallback() {
    this.innerHTML = `<div class="row stockLevel"><div class="col p-0"><span style="background: ${this.bgcolor}" class="text-center mw-100 d-inline-block text-white py-1 px-2 rounded my-2 stockLevel">${this.status}</span></div></div>`; 
  }
}

class FindMoreAvailability extends HTMLElement {
  constructor() {
    super();
  }

  template = () => 
    `
    <style>
    #find-more-availability.booker, .stockStatusFilter {
  background: #2356AA;
}

#find-more-availability a, #find-more-availability .form-control {
  font-size: 0.8rem;
  color: #2356AA;
}

#find-more-availability .closeFilters, .closeFilters, .filterBranches, stock-status-filter {
  font-size: 0.625rem;
  cursor: pointer;
}


#find-more-availability {
  color: #2356AA;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.8rem;
  z-index: 1500;
}

#find-more-availability .btn, #find-more-availability .btn:hover {
  background-color: #00BDF7;
  color: white;
}

#find-more-availability .lozenge {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
}

.findBranchesIcon {
   margin-left: -0.2rem;
}

@media (min-width: 576px) {
    .container {
      max-width: 100%;
    }
}

@media (min-width: 768px) {
  #find-more-availability {  
    max-width: 500px;
  }
}

@media (max-width: 767.9px) {
  #find-more-availability {
    width: 100%;
  }
}
    </style>
    <div class="container d-none find-more-availability booker text-white p-3" id="find-more-availability">
<div class="row">
  <div class="col-10 p-0">
    <h5>Branches with Stock Available for Collection</h5>
    <h6>${this.product.description} (${this.product.volume})</h6>
  </div>
  <div class="col-2">
    <button type="button" class="close closeFindMoreAvailability text-white" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</div>
<div class="row">
  <div class="col-8 p-0">
    <div class="input-group">
      <input type="text" class="form-control border-0" placeholder="Enter postcode or location">
        <span class="input-group-text findBranchesIcon bg-white border-0 rounded-right"><i class="fas fa-solid fa-location-crosshairs"></i></span>
    </div>
  </div>
  <div class="col-4 p-0">
    <a href="#" class="btn bluebutton d-inline-block float-right">Find Branches</a>
  </div>
</div>
<div class="container p-0 my-3">
  <div class="row">
    <div class="col-8 filterBy">
      
    </div>
    <div class="col-4 text-right">
      Filter Branches <i class="fas fa-solid fa-sliders border p-1 filterBranches"></i>
    </div>
  </div>
</div>
<div class="container p-0 bg-light text-dark availableFilters">
  <div class="row my-2 p-2 text-dark bg-white">
    <div class="col-12 p-0">
      <div class="row">
        <div class="col-8 p-0">
          <strong>Available Filters</strong>
        </div>
        <div class="col-4 p-0">
          <span class="close closeFilters">Close (X)</span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-0">
          ${this.filters.map(filter => `<stock-status-filter data-stock-status-filter="${filter.status.toUpperCase()}"></stock-status-filter>`).join('')}
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container p-0" id="branches">
  ${this.product.stock.map((productBranch) => 
    this.branches.map((branch) => productBranch.id == branch.id ? `
  <div class="row my-2 p-2 text-dark bg-white">
    <div class="col-12 p-0">
      <div class="row text-left">
    <div class="col-8 p-0">
      <a href="#" class="font-weight-bold">BOOKER ${branch.name.toUpperCase()}</a>
    </div>
    <div class="col-4 text-center">
      <span class="distance"><b>${branch.distance} Miles</b></span>
    </div>
  </div>
  <div class="row">
    <div class="col-8 p-0">${branch.isOpened ? `<span class="lozenge bg-success align-middle"></span> <b>Open</b> until ${branch.close}` : `<span class="lozenge bg-danger align-middle"></span> <b>Closed</b>. Opens ${branch.open} `}</div>
    <div class="col-4 text-center">${productBranch.quantity > 10 ? `<stock-label data-stocklevel="IN STOCK"></stock-label>` : productBranch.quantity > 0 && productBranch.quantity <= 5 ? `<stock-label data-stocklevel="LOW STOCK"></stock-label>` : `<stock-label data-stocklevel="NO STOCK"></stock-label>`}</div>
  </div> 
 </div> 
</div>    
` : '').join("")).join("")}
<div class="row mt-2 mb-5">
  <div class="col-12 p-0">
    <a href="#" class="btn d-block p-3 w-100 bg-light text-dark">Show more branches</a>
  </div>
</div>
<div class="row">
  <div class="col-12 p-0">
    <a href="#" class="btn d-inline-block p-3 w-100 closeFindMoreAvailabilityMenu bluebutton">Close Menu</a>
  </div>
</div>
</div>
    `;

  connectedCallback() {
    this.midascode = this.getAttribute('data-midascode');
    this.productKey = Object.keys(productsData).find(key => productsData[key].midascode == this.midascode);
    this.product = productsData[this.productKey];
    this.branches = branches;
    this.filters = filters;
    this.render();
  }

  render() {
    this.innerHTML = `${this.template().trim()}`;

    const toggleElement = (className) => {
      this.querySelector(className).classList.toggle('d-none');
    }

    const filterBy = (filter) => {
      this.querySelector('.filterBy').innerHTML += `<stock-status-filter data-stock-status-filter="${filter}"></stock-status-filter>`;
    }

    this.querySelector('.closeFilters').addEventListener('click', () => {toggleElement('.availableFilters')});
    this.querySelector('.filterBranches').addEventListener('click', () => {toggleElement('.availableFilters')});
    this.querySelector('.closeFindMoreAvailability').addEventListener('click', () => {toggleElement('.find-more-availability')});
    this.querySelector('.closeFindMoreAvailabilityMenu').addEventListener('click', () => {toggleElement('.find-more-availability')});
    const stockStatusFilters = this.querySelectorAll('stock-status-filter');
    [...stockStatusFilters].map(filter => filter.addEventListener('click', () => {filterBy(filter.filter)}));
  
  }

  

  
}


customElements.define('add-to-list', AddToList);
customElements.define('add-to-note', AddToNote);
customElements.define('find-more-availability', FindMoreAvailability);
customElements.define('stock-label', StockLabel);
customElements.define('stock-status-filter', StockStatusFilter);
