function mockStockLevel() {
    
  let stockLevels = [
    {
      level: 'IN STOCK',
      color: '#51AF39'
    },
    {
      level: 'LOW STOCK',
      color: '#EE8E1B'
    },
    {
      level: 'NO STOCK',
      color: '#808080'
    },
  ];
  let stock = Math.floor(Math.random() * stockLevels.length);
  return stockLevels[stock];
}


const branches = [{
  id: 503,
  name: 'Kettering',
  distance: 20.9,
  status: 'OPEN',
  open: 'Monday 8:30AM',
  close: '3:00PM',
  lat: 52.4090884,
  lon: -0.7196247,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 266,
  name: 'Northampton',
  distance: 30.1,
  status: 'OPEN',
  open: 'Monday 10:00AM',
  close: '4:00PM',
  lat: 52.2481206,
  lon: -1.1024259,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 316,
  name: 'Peterborough',
  distance: 2.5,
  status: 'CLOSED',
  open: 'Tuesday 9:00AM',
  close: '5:00PM',
  lat: 52.5548845,
  lon: -0.2641662,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 329,
  name: 'Luton',
  distance: 25.0,
  status: 'OPEN',
  open: 'Monday 9:00AM',
  close: '6:00PM',
  lat: 51.9220378,
  lon: -1.6340446,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 533,
  name: 'Bedford',
  distance: 26.5,
  status: 'CLOSED',
  open: 'Monday 7:45AM',
  close: '7:00PM',
  lat: 52.1487477,
  lon: -0.4228694,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 544,
  name: 'Cambridge',
  distance: 28.5,
  status: 'CLOSED',
  open: 'Monday 7:45AM',
  close: '2:00PM',
  lat: 52.1958316,
  lon: 0.164765,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 144,
  name: 'Great Yarmouth',
  distance: 123.0,
  status: 'CLOSED',
  open: 'Monday 7:45AM',
  close: '2:00PM',
  lat: 52.6111495,
  lon: 1.7131574,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 305,
  name: 'Rugby',
  distance: 123.0,
  status: 'CLOSED',
  open: 'Monday 7:45AM',
  close: '2:00PM',
  lat: 52.3735393,
  lon: -1.2856324,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 191,
  name: 'Warwick',
  distance: 123.0,
  status: 'OPEN',
  open: 'Monday 7:45AM',
  close: '2:00PM',
  lat: 52.2894239,
  lon: -1.59197,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 302,
  name: 'Coventry',
  distance: 123.0,
  status: 'CLOSED',
  open: 'Monday 7:45AM',
  close: '2:00PM',
  lat: 52.4087804,
  lon: -1.5005229,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 331,
  name: 'Nuneaton',
  distance: 123.0,
  status: 'CLOSED',
  open: 'Monday 7:45AM',
  close: '2:00PM',
  lat: 52.5041024,
  lon: -1.4765309,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 337,
  name: 'Birmingham Stirchley',
  distance: 123.0,
  status: 'OPEN',
  open: 'Monday 7:45AM',
  close: '2:00PM',
  lat: 52.4342477,
  lon: -1.9190637,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 380,
  name: 'Wolverhampton',
  distance: 123.0,
  status: 'OPEN',
  open: 'Monday 9:45AM',
  close: '2:00PM',
  lat: 52.56988,
  lon: -2.1053074,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 190,
  name: 'Tamworth',
  distance: 123.0,
  status: 'CLOSED',
  open: 'Monday 9:45AM',
  close: '2:00PM',
  lat: 52.6386645,
  lon: -1.7083861,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 354,
  name: 'Saltley',
  distance: 123.0,
  status: 'OPEN',
  open: 'Monday 9:30AM',
  close: '2:00PM',
  lat: 52.4913606,
  lon: -1.863292,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 369,
  name: 'Ardwick',
  distance: 123.0,
  status: 'CLOSED',
  open: 'Monday 7:45AM',
  close: '2:00PM',
  lat: 53.4688535,
  lon: -2.2197266,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 109,
  name: 'Gorton',
  distance: 123.0,
  status: 'OPEN',
  open: 'Monday 9:00AM',
  close: '7:00PM',
  lat: 53.4694801,
  lon: -2.1759099,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 276,
  name: 'Stockport',
  distance: 123.0,
  status: 'OPEN',
  open: 'Monday 8:00AM',
  close: '5:00PM',
  lat: 53.4062751,
  lon: -2.1913884,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
},
{
  id: 570,
  name: 'Manchester Makro',
  distance: 123.0,
  status: 'CLOSED',
  open: 'Monday 7:45AM',
  close: '4:30PM',
  lat: 53.4630919,
  lon: -2.3974046,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: [],
  smallBusinessService: ['PRODUCT_RANGE', 'CLICK_&_COLLECT']
},
{
  id: 260,
  name: 'Middleton',
  distance: 123.0,
  status: 'OPEN',
  open: 'Monday 7:30AM',
  close: '4:00PM',
  lat: 53.5650443,
  lon: -2.166097,
  caterersServices: ['PRODUCT_RANGE', 'DELIVERY', 'CLICK_&_COLLECT'],
  retailersServices: ['PRODUCT_RANGE', 'DELIVERY'],
  smallBusinessService: ['PRODUCT_RANGE', 'DELIVERY']
}
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
    },
    {
      id: 329,
    },
    {
      id: 503,
    },
    {
      id: 266,
    },
    {
      id: 533
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
      id: 316
    },
    {
      id: 329
    },
    {
      id: 503
    },
    {
      id: 266
    },
    {
      id: 533
    },
    {
      id: 369
    },
    {
      id: 109
    },
    {
      id: 276
    },
    {
      id: 570
    },
    {
      id: 260
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
      id: 316
    },
    {
      id: 329
    },
    {
      id: 503
    },
    {
      id: 266
    },
    {
      id: 533
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
      id: 316
    },
    {
      id: 329
    },
    {
      id: 503
    },
    {
      id: 266
    },
    {
      id: 533
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
      id: 316
    },
    {
      id: 329
    },
    {
      id: 503
    },
    {
      id: 266
    },
    {
      id: 533
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
      id: 316
    },
    {
      id: 329
    },
    {
      id: 503
    },
    {
      id: 266
    },
    {
      id: 533
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
      id: 316
    },
    {
      id: 329
    },
    {
      id: 503
    },
    {
      id: 266
    },
    {
      id: 533
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
      id: 316
    },
    {
      id: 329
    },
    {
      id: 503
    },
    {
      id: 266
    },
    {
      id: 533
    }
  ]
}
];


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
    this.name = this.getAttribute('data-rts-filter-name');
    this.active = this.getAttribute('data-rts-filter-active');
    this.category = this.getAttribute('data-rts-filter-category');
  }
  
  connectedCallback() {
    this.innerHTML = `<span class="text-center mw-100 d-inline-block stockStatusFilter text-white py-1 px-2 rounded mr-2 my-2" value="${this.name}">${this.name} ${this.active == 'true' ? `<i class="fas fa-solid fa-xmark pl-1"></i>` : '<i class="fas fa-solid fa-plus pl-1"></i>'}</span>`;
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

.find-more-availability {
  background: #2356AA;
  top: 0;
  right: 0;
  position: absolute;
  font-size: 0.8rem;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  width: 500px;
  max-width: 500px;
}

.stockStatusFilter {
  background: #4A5DA8;
  border-radius: 2px;
  border: 1px solid white;
}

.find-more-availability a, .find-more-availability .form-control, .find-more-availability .btn {
  color: #2356AA;
  border-radius: 0;
}

stock-status-filter {
  font-size: 0.625rem;
  cursor: pointer;
}

.productDescription {
  color: #B9E0FF;
}


.filterBranches {
  font-size: 1rem;
  cursor: pointer;
  margin-left: 5px;
}

.closeFilters {
  cursor: pointer;
}


.showMoreBranchesChevron {
  float: right;
}

.showMoreBranchesChevron.collapsed .fa-chevron-up {
  transform: rotate(180deg);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}

.find-more-availability .lozenge {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  margin-top: -3px;
  margin-right: 3px;
}

.findMoreAvailabilityShowMore {
  background: #d3d3d3;
}

.branchName {
  text-decoration: underline;
  font-size: 120% !important;
}

.distance, .branchName {
  font-weight: 900;
  font-size: 120%;
}

.findBranchesIcon {
   margin-left: -0.2rem;
   border-radius: 0;
}


.findBranches {
  border-bottom: 2px solid #00BDF7;
}

#filteredBranches, #filteredBranches a:hover {
  text-decoration: none;
}

.availableHeadings, .closeFilters {
  font-size: 1rem; 
}


#filteredBranches .branchName {
  color: #2356AA;
}

#filteredBranches .fa-chevron-right {
  position: absolute;
  top: 40%;
  right: 0%;
  font-size: larger;
}



@media (min-width: 576px) {
  .container {
    max-width: 100%;
  }
}


@media (max-width: 767.9px) {
  .find-more-availability {
    width: 100%;
    max-width: 100%;
  }

}

@media (max-width: 576px) {
  .enterTownPostCode, .findBranches {
    font-size: 80%;
  }
}

    </style>
    <div class="find-more-availability text-white p-3 d-none" id="find-more-availability">
<div class="row">
  <div class="col-10 p-0">
    <h5>Branches with Stock Available for Collection</h5>
    <h6 class="productDescription">${this.product.description} (${this.product.volume})</h6>
  </div>
  <div class="col-2 p-0">
    <button type="button" class="close closeFindMoreAvailability text-white" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</div>
<div class="row my-3 d-flex align-items-center">
  <div class="col-8 p-0">
    <div class="input-group">
      <input type="text" class="form-control border-0 enterTownPostCode" placeholder="Enter postcode or location">
        <span class="input-group-text findBranchesIcon bg-white border-0"><i class="fas fa-solid fa-location-crosshairs"></i></span>
    </div>
  </div>
  <div class="col-4 p-0">
    <a href="#" class="btn bluebutton findBranches ml-2 d-block">Find Branches</a>
  </div>
</div>
<div class="container p-0 my-3">
  <div class="row d-flex align-items-center py-2">
    <div class="col-8 filterByInFlight p-0">
      ${this.filtersHolder.map(filter => `<stock-status-filter class="stock-status-filter ${filter.active == false ? 'd-none': ''}" data-rts-filter-name="${filter.name}" data-rts-filter-active="${filter.active}" data-rts-filter-category="${filter.category}"></stock-status-filter>`).join('')}
    </div>
    <div class="col-4 text-right p-0">
      <span>Filter Branches <i class="fas fa-solid fa-sliders border p-1 filterBranches"></i></span>
    </div>
  </div>
</div>
<div class="container d-none p-0 bg-light text-dark availableFilters">
  <div class="row my-2 p-3 text-dark bg-white">
    <div class="col-12 p-0">
      <div class="row d-flex align-items-center availableHeadings">
        <div class="col-8 p-0">
          <strong>Available Filters</strong>
        </div>
        <div class="col-4 p-0">
          <span class="close closeFilters">Close (X)</span>
        </div>
      </div>
      <div class="row my-2">
        <div class="col-12 p-0">
          ${this.filtersHolder.map(filter => `<stock-status-filter class="stock-status-filter ${filter.active == true ? 'd-none' : ''}" data-rts-filter-name="${filter.name}" data-rts-filter-category="${filter.category}" data-rts-filter-active="${filter.active}"></stock-status-filter>`).join('')}
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container p-0" id="filteredBranches">
  ${this.productBranch.map((productBranch, index) => `
 <a href="https://www.booker.co.uk/branch-locator/search/" target="_blank">  
    <div class="row my-2 pt-3 px-3 pb-2 text-dark bg-white ${index < 4 ? '' : 'showBranchesHide d-none' }">
   
    <div class="col-12 p-0">
      <div class="row">
      <div class="col-8 p-0">
        <span class="branchName">BOOKER ${productBranch.name.toUpperCase()}</span>
      </div>
      <div class="col-4 text-center">
        <span class="distance">${productBranch.distance} Miles</span>
      </div>
  </div>
  <div class="row d-flex align-items-center">
    <div class="col-8 p-0"><span class="openClosed">${productBranch.status == 'OPEN' ? `<span class="lozenge bg-success align-middle"></span> <b>Open</b> until ${productBranch.close}` : `<span class="lozenge bg-danger align-middle"></span> <b>Closed</b>. Opens ${productBranch.open} `}</span></div>
    <div class="col-4 text-center"><stock-label data-stocklevel="${productBranch.level}" data-stocklevel-bgcolor="${productBranch.color}"></stock-label></div>
  </div>
  <i class="fa-solid fa-chevron-right"></i> 
 </div>
</div> 
</a>   
`).join('')}
</div>
<div class="row my-2 d-flex">
  <div class="col-12 p-0">
    <a href="#" class="btn d-block p-3 w-100 text-dark findMoreAvailabilityShowMore">Show more branches <span class="showMoreBranchesChevron collapsed"><i class="fa-solid fa-chevron-up"></i></span></a>
  </div>
</div>
<div class="row my-2 d-block closeFindMoreAvailabilityRow">
  <div class="col-12 p-0">
    <a href="#" class="btn d-block p-3 w-100 closeFindMoreAvailabilityMenu bluebutton">Close Menu</a>
  </div>
</div>
</div>
    `;

  connectedCallback() {
    this.midascode = this.getAttribute('data-midascode');
    this.productKey = Object.keys(productsData).find(key => productsData[key].midascode == this.midascode);
    this.product = productsData[this.productKey];
    this.productBranch = [];
    this.product.stock.map((product) => {
      let stock = mockStockLevel();
      product.level = stock.level;
      product.color = stock.color; 
      branches.map(branch => {
        if (product.id == branch.id) {
          this.productBranch.push({...product, ...branch});
        }
      });
    });
    
    this.productBranchFull = [...this.productBranch];

    this.productBranch = this.productBranch.filter(product => product.level == 'IN STOCK' || product.level == 'LOW STOCK');

    this.filteredProductBranch = this.productBranch;

    this.filtersHolder = [
      {
        category: 'level',
        name: 'IN STOCK',
        active: true
      },
      {
        category: 'level',
        name: 'LOW STOCK',
        active: true
      },
      {
        category: 'level',
        name: 'NO STOCK',
        active: false
      },
      {
        category: 'status',
        name: 'OPEN',
        active: false
      },
      {
        category: 'status',
        name: 'CLOSED',
        active: false
      },
      {
        category: 'business',
        name: 'RETAILER',
        active: false
      },
      {
        category: 'business',
        name: 'CATERER',
        active: false
      }
    ];
    
    this.render();
  }


  render() {
    this.innerHTML = `${this.template().trim()}`;
    const toggleElement = (className) => {
      this.querySelectorAll(className).length > 1 ? [...this.querySelectorAll(className)].map(c => c.classList.toggle('d-none')) : this.querySelector(className).classList.toggle('d-none');
    }

    let height = $(document).height();
      $('#find-more-availability').css('min-height', height + 30 + 'px');

    this.findMoreAvailableCss();

    $(window).resize(() => {
      let height = $(document).height();
      $('#find-more-availability').css('min-height', height + 'px');
    });

    
    this.querySelector('.filterBranches').addEventListener('click', () => {toggleElement('.availableFilters')});
    this.querySelector('.closeFindMoreAvailability').addEventListener('click', () => {toggleElement('.find-more-availability')});
    this.querySelector('.closeFindMoreAvailabilityMenu').addEventListener('click', () => {toggleElement('.find-more-availability')});
    this.querySelector('.closeFilters').addEventListener('click', () => {
      this.querySelector('.availableFilters').classList.add('d-none');
    });

    this.querySelector('.findMoreAvailabilityShowMore').addEventListener('click', () => {
      toggleElement('.showBranchesHide');
      this.querySelector('.showMoreBranchesChevron').classList.toggle('collapsed');
      this.toggleFindMoreAvailableCss();
    });

    const availableFilters = this.querySelectorAll('.availableFilters stock-status-filter');
    
    [...availableFilters].map(f => {
      f.addEventListener('click', () => 
        {
          this.clickFilter(f);
        });
    });

    const inFlightFilters = this.querySelectorAll('.filterByInFlight > stock-status-filter');

    [...inFlightFilters].map(f => {
      f.addEventListener('click', () => {
        this.clickFilter(f);
      });
    });
  }

  clickFilter = (filter) => {
    this.filterBy(filter);
    this.querySelector('.availableFilters').classList.toggle('d-none');
  }

  toggleFindMoreAvailableCss = () => {
    if ($('.closeFindMoreAvailabilityRow').css('position') == 'absolute') {
      $('.closeFindMoreAvailabilityRow').css('position', '');
      $('.closeFindMoreAvailabilityRow').css('left', '0');
      $('.closeFindMoreAvailabilityRow').css('right', '0');
      $('.closeFindMoreAvailabilityRow').css('bottom', '0');
    } else {
      this.findMoreAvailableCss();
    }
  }
  
  findMoreAvailableCss = () => {
    $('.closeFindMoreAvailabilityRow').css('position', 'absolute');
    $('.closeFindMoreAvailabilityRow').css('left', '15px');
    $('.closeFindMoreAvailabilityRow').css('right', '15px');
    $('.closeFindMoreAvailabilityRow').css('bottom', '15px');
  }

  filterBy = (f) => {
    let filterName = f.getAttribute('data-rts-filter-name');

    this.filtersHolder.forEach(f => {
      if (f.name == filterName) {
        f.active = !f.active;
      }
    });

   
    this.filterData();
  
    this.productBranch = this.filtersHolder.filter(f => f.active == true).length > 0 ? this.filteredProductBranch : this.productBranchFull;


    this.render();
    this.querySelector('#find-more-availability').classList.remove('d-none');
  }


  filterData = () => {
    let activeFilters = this.filtersHolder.filter(f => f.active !== false);

    let activeFiltersCat = activeFilters.map(f => f.category);
    let status = this.countOccurrences(activeFiltersCat, 'status');
    let level = this.countOccurrences(activeFiltersCat, 'level');
    let business = this.countOccurrences(activeFiltersCat, 'business');
  
    let filters = activeFilters.map(f => f.name);

    this.filteredProductBranch = this.productBranchFull.filter(product => {
      product.businessServices = [];
      if (product.caterersServices.length > 0) {
        product.businessServices.push('CATERER');
      }
      if (product.retailersServices.length > 0) {
        product.businessServices.push('RETAILER');
      }

      if (level > 0 && status > 0 && business > 0) {
        if (filters.includes(product.level) && filters.includes(product.status) && product.businessServices.some(p => filters.includes(p))) {
          return true;
        }
        return;
      }

      if (status > 0 && business > 0) {
        if (filters.includes(product.status) && product.businessServices.some(p => filters.includes(p))) {
          return true;
        }
        return;
      }

      if (level > 0 && status > 0) {
        if (filters.includes(product.level) && filters.includes(product.status)) {
          return true;
        }
        return;
      }

      if (status > 0 && business > 0) {
        if (filters.includes(product.status) && product.businessServices.some(p => filters.includes(p))) {
          return true;
        }
        return;
      }

      if (level > 0) {
        if (filters.includes(product.level)) {
          return true;
        }
        return;
      }

      if (status > 0) {
        if (filters.includes(product.status)) {
          return true;
        }
        return;
      }

      if (business > 0) {
        if (product.businessServices.some(p => filters.includes(p))) {
          return true;
        }
        return;
      }
    });    
  }

  countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

}


customElements.define('add-to-list', AddToList);
customElements.define('add-to-note', AddToNote);
customElements.define('find-more-availability', FindMoreAvailability);
customElements.define('stock-label', StockLabel);
customElements.define('stock-status-filter', StockStatusFilter);
