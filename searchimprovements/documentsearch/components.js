
let searchProducts = [
  {
    midascode: 286188,
    description: 'HARIBO Balla Bites 140g',
    img: 'https://media.booker.co.uk/bbimages/1/05f057b7-13ed-4e32-a097-0ca9a4b3a323.jpg?date=20240909',
    volume: '12 x 140g',
    rrp: 1.25,
    por: 34.5,
    price: 8.19
  },
  {
    midascode: 286192,
    description: 'HARIBO Balla Stixx Strawberry Flavour 140g',
    img: 'https://media.booker.co.uk/bbimages/1/8e5432ca-e489-4f3d-8224-b00c8b4bdecb.jpg?date=20240909',
    volume: '12 x 154g',
    rrp: 1.25,
    por: 34.5,
    price: 8.19
  },
  {
    midascode: 286227,
    description: 'HARIBO Bubblegum Bottles Zing 160g',
    img: 'https://media.booker.co.uk/bbimages/1/7c70526b-b428-4f89-833a-6a8ad7a502bc.jpg?date=20240909',
    volume: '12 x 160g',
    rrp: 1.25,
    por: 34.5,
    price: 8.19
  },
  {
    midascode: 89443,
    description: 'HARIBO Chamallows 1kg',
    img: 'https://media.booker.co.uk/bbimages/1/02509c97-67c3-4da5-90de-0d129cb494c3.jpg?date=20240909',
    volume: '1kg',
    rrp: 0,
    por: 0,
    price: 5.29
  },
  {
    midascode: 284312,
    description: 'HARIBO Giant Cola 720g',
    img: 'https://media.booker.co.uk/bbimages/1/dd16a839-1a21-402e-9746-2da5016426c5.jpg?date=20240909',
    volume: '4 x 40pc',
    rrp: 0,
    por: 0,
    price: 16.29
  },
  {
    midascode: 294657,
    description: 'HARIBO Happy Cola 140g',
    img: 'https://media.booker.co.uk/bbimages/1/193e4b5d-c326-405b-90bd-11ae0a0f5db2.jpg?date=20240909',
    volume: '12 x 140g',
    rrp: 1.25,
    por: 27.3,
    price: 9.09
  },
  {
    midascode: 260494,
    description: 'HARIBO Starmix Fruit & Cola Flavour Jelly & Foam Sweets Sharing Bag 160g',
    img: 'https://media.booker.co.uk/bbimages/1/5ef52464-87b7-47a9-8a09-1d6695838a18.jpg?date=20240909',
    volume: '12 x 160g',
    rrp: 2.39,
    por: 49.2,
    price: 12.15
  },
  {
    midascode: 295906,
    description: 'HARIBO Tangfastics Fruit & Cola Flavour Fizzy Jelly Sweets Sharing Bag 154g',
    img: 'https://media.booker.co.uk/bbimages/1/e5805c6d-64cf-4124-a67e-d1b78086fad3.jpg?date=20240923',
    volume: '12 x 160g',
    rrp: 1.25,
    por: 27.3,
    price: 9.09
  },
  {
    midascode: 288953,
    description: 'HARIBO Sour Skeletons 140g',
    img: 'https://media.booker.co.uk/bbimages/1/2cb1c3da-41ba-4e6d-88ac-70230a7b46c3.jpg?date=20240923',
    volume: '12 x 160g',
    rrp: 1.25,
    por: 29.7,
    price: 8.79
  },
  {
    midascode: 295909,
    description: 'HARIBO Twin Snakes 154g',
    img: 'https://media.booker.co.uk/bbimages/1/7f81f2e4-e352-4592-969b-3d952258aad2.jpg?date=20240923',
    volume: '12 x 160g',
    rrp: 1.25,
    por: 27.3,
    price: 9.09
  }
];

let searchDocuments = [
  {
    id: 1,
    description: 'Website Terms and Conditions',
    category: 'Web Page',
    icon: '<i class="fa-regular fa-file fa-2xl"></i>',
    url: ''
  },
  {
    id: 2,
    description: 'Booker Retail Partners Allocations Guide',
    category: 'PDF Document',
    icon: '<i class="fa-regular fa-file-pdf fa-2xl"></i>',
    url: ''
  },
  {
    id: 3,
    description: 'Booker Oil Return Service - Get £5 Per Litre',
    category: 'PDF Document',
    icon: '<i class="fa-regular fa-file-pdf fa-2xl"></i>',
    url: ''
  },
  {
    id: 4,
    description: 'Summer 2025 Pre-Sell',
    category: 'Word Document',
    icon: '<i class="fa-regular fa-file-word fa-2xl"></i>',
    url: ''
  },
  {
    id: 5,
    description: 'Summer Sales Pre-Sell 2023 - Coca-Cola',
    category: 'Web Page',
    icon: '<i class="fa-regular fa-file fa-2xl"></i>',
    url: ''
  },
  {
    id: 6,
    description: 'Privacy Policy & Cookies',
    category: 'Web Page',
    icon: '<i class="fa-regular fa-file fa-2xl"></i>',
    url: ''
  },
  {
    id: 7,
    description: 'Tobacco Pricing Changes - 2024 Budget',
    category: 'Excel Document',
    icon: '<i class="fa-regular fa-file-excel fa-2xl"></i>',
    url: ''
  },
];


let searchInput = document.querySelectorAll('#search-input.input-group');

let newSearchInputHtml = `
    <div class="input-group-prepend documentSearchPrepend">
      <button class="btn btn-outline-secondary dropdown-toggle documentSearchBtn" type="button" data-toggle="dropdown" data-target="products" aria-haspopup="true" aria-expanded="false">Products</button>
      <ul class="dropdown-menu text-center border-top-0 m-0 p-0">
        <li class="dropdown-item" data-target="products">Products</li>
        <li class="dropdown-item" data-target="documents">Documents</li>
      </ul>
    </div>

    <input name="keywords" type="text" class="suggestion-keywords form-control" placeholder="Search by Product code, description or barcode">
    <div class="suggestions-result" style="display: none">
       
    </div>
    <div class="scanner-picker">
    <div id="scanner-icon">
        <a id="barcode-picker-starter-button" href="#" onclick="startBarcodePicker(); ">
            <img src="https://www.booker.co.uk/images/barcode-icon.png" alt="Scan Barcode">
        </a>
    </div>
    <div id="scanner-modal" class="fixed-top w-100 h-100 bg-white d-none scanner-modal-green">
        <div class="scanner-header scanner-header-green row">
            <div class="col-6" onclick="stopBarcodePicker();" style="cursor: pointer;">
                <i id="scanner-close-button" class="fas fa-chevron-left position-absolute top-0 start-0"></i>
                <h3 class="mb-0 ml-4">Back</h3>
            </div>
            <div id="scanner-minicart" class="col-6 text-right"><div class="scanner-trolley" style="display: none;"><img src="/images/orange-trolley.png" alt="orange trolley" width="20" class="aligin-middle"> <span class="colt mr-1"></span></div><div class="scanner-truck"><img src="/images/green-truck.png" alt="green truck" width="20" class="aligin-middle"> <span class="delt">£146.94</span></div></div>
        </div>

        <div id="barcode-picker" class="scanner scandit-hidden">
        <div class="https://www.booker.co.uk/images/barcode-icon.png" class="scandit-logo"></div></div></div>

        <div class="scanner-product-list fixed-bottom w-100">
            <div class="scanner-notification position-sticky p-2 pl-3">
                <p class="m-0 text-white">Searching...</p>
                <button type="button" class="close opacity-1 position-absolute" aria-label="Close" onclick="clearSearchResults();">
                    <span class="text-white" aria-hidden="true">×</span>
                </button>
            </div>
            <section class="SubCategoriesRow">
                <div class="rowMode d-none">

                </div>
            </section>
        </div>
    </div>
</div>
    <div class="input-group-append search-button">
      <button class="btn btn-outline-secondary" type="submit">
        <i class="fas fa-search fa-lg" onclick="$(this).closest('form').submit();"></i>
      </button>
    </div>
`;



[...searchInput].map(search => {
  search.innerHTML = newSearchInputHtml;
});

  let suggestionResults = document.querySelectorAll('.suggestions-result');

  let productDocumentUl = document.querySelectorAll('.documentSearchPrepend');

  [...productDocumentUl].map(product => {
    product.addEventListener('click', (event) => {
      let selected = event.target.getAttribute('data-target');
      if (selected == null) return;
      let options = document.querySelectorAll('.documentSearchPrepend .dropdown-menu');
      [...options].map(option => {
        let lis = option.getElementsByTagName('li');
        [...lis].map(li => {
          if (li.getAttribute('data-target') == selected) {
            li.classList.add('d-none');
          } else {
            li.classList.remove('d-none');
          }
        })

      });
    
      let documentSearchBtns = document.querySelectorAll('.documentSearchBtn');
      [...documentSearchBtns].map(btn => {
        btn.innerHTML = selected.charAt(0).toUpperCase() + selected.slice(1);
        
      })
      placeholderChange(selected);
    });
  });


  const placeholderChange = (value) => {
    [...suggestionResults].map(results => {
      results.innerHTML = '';
      let sdd = document.getElementsByName('keywords');

      if (value == 'products') {
        sdd[1].placeholder = 'Search by product code, description, or barcode'; 
        sdd[2].placeholder = 'Search by product code, description, or barcode'; 
        results.innerHTML = loadSearchProducts();
      } else {
        sdd[1].placeholder = 'Search for content using keywords or a phrase';
        sdd[2].placeholder = 'Search for content using keywords or a phrase';
        results.innerHTML = loadSearchDocuments();
      }
      $('.suggestions-result').css('display', 'block');
    });
  }


  const loadSearchProducts = () => {
    let html = ``;
    searchProducts.map(product => {
      html += `
        <div class="keywordsuggestion row d-flex justify-content-center align-items-center py-3">
          <div class="col-lg-12 col-xl-1 productImg">
            <div><img src="${product.img}"></div>
          </div>
          <div class="col-lg-12 col-xl-8 productDetails">
            <div>
              <a class="searchUrl" href="/products/search?keywords=${product.description}">${product.description}</a>
              <p class="volume">Case of ${product.volume}</p>
            </div>
          </div>
          <div class="col-lg-12 col-xl-3 priceRrp">
            <p class="price">&pound;${product.price}</p>
            <p class="rrp">RRP: &pound;${product.rrp}</p>
          </div>
        </div>
      `;
    });
    return html;
  }

  const loadSearchDocuments = () => {
    let html = ``;
    searchDocuments.map(document => {
      html += `
        <div class="keywordsuggestion row d-flex justify-content-center align-items-center py-3">
          <div class="col-xs-12 col-xl-1">
            ${document.icon}
          </div>
          <div class="col-xs-12 col-xl-11">
            <a href="/documents/search?name=${document.description}">${document.description}</a>
            <p class="category">${document.category}</p>
          </div>
        </div>
      `;
    });
    return html;
}

let searchInputs = document.querySelectorAll('#search-input input[type=text]');
[...searchInputs].map(search => {
  search.addEventListener('blur', () => {
    $('.suggestions-result').fadeOut();
  });
});
