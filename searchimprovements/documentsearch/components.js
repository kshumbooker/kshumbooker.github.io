const customCssElement = document.querySelector('#customCssFile');

const faciaLogo = document.querySelectorAll('#logo img');

const brpFacias = ['londis', 'budgens', 'premier'];

const currentUrl = window.location.search;

const urlParams = new URLSearchParams(currentUrl);

let facia = urlParams.get('facia');

[...faciaLogo].map(logo => {
  let imageFacia = (facia !== null) ? facia : 'booker'
  logo.src = 'https://www.booker.co.uk/images/' + imageFacia + '.png';
  if (brpFacias.includes(facia)) {
    $('#store.font-weight-light.d-flex.justify-content-start').attr('style', 'display: none !important');
    $('#store.font-weight-light.d-flex.justify-content-center').attr('style', 'display: none !important');
  } 
});

customCssElement.href = './' + facia + '.css';




let searchInput = document.querySelectorAll('#search-input.input-group');

let newSearchInputHtml = `
  <div class="input-group-prepend documentSearchPrepend">
    <button class="btn dropdown-toggle documentSearchBtn" type="button" data-toggle="dropdown" data-target="products" aria-haspopup="true" aria-expanded="false">Products</button>
    <ul class="dropdown-menu text-center border-top-0 m-0 p-0">
      <li class="dropdown-item" data-target="products">Products</li>
      <li class="dropdown-item" data-target="documents">Documents</li>
    </ul>
  </div>
`;



[...searchInput].map(search => {

  let documentSearchUl = document.createElement('div');

  documentSearchUl.setAttribute('id', 'documentSearchDiv');

  documentSearchUl.innerHTML = newSearchInputHtml;
  
  search.insertBefore(documentSearchUl, search.firstChild);
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
      } else {
        sdd[1].placeholder = 'Search for content using keywords or a phrase';
        sdd[2].placeholder = 'Search for content using keywords or a phrase';
      }

    });
  }


let searchInputs = document.querySelectorAll('#search-input input[type=text]');
[...searchInputs].map(search => {
  search.addEventListener('blur', () => {
    $('.suggestions-result').fadeOut();
  });
  
});

