let searchDocuments = [
  {
    id: 1,
    description: 'Website Terms and Conditions',
    category: 'Web Page',
    icon: '<i class="fa-regular fa-file fa-2xl"></i>',
    published: '25/12/2024',
    url: ''
  },
  {
    id: 2,
    description: 'Booker Retail Partners Allocations Guide',
    category: 'PDF Document',
    icon: '<i class="fa-regular fa-file-pdf fa-2xl"></i>',
    published: '25/12/2024',
    url: ''
  },
  {
    id: 3,
    description: 'Booker Oil Return Service - Get £5 Per Litre',
    category: 'PDF Document',
    icon: '<i class="fa-regular fa-file-pdf fa-2xl"></i>',
    published: '25/12/2024',
    url: ''
  },
  {
    id: 4,
    description: 'Summer 2025 Pre-Sell',
    category: 'Word Document',
    icon: '<i class="fa-regular fa-file-word fa-2xl"></i>',
    published: '25/12/2024',
    url: ''
  },
  {
    id: 5,
    description: 'Summer Sales Pre-Sell 2023 - Coca-Cola',
    category: 'Web Page',
    icon: '<i class="fa-regular fa-file fa-2xl"></i>',
    published: '25/12/2024',
    url: ''
  },
  {
    id: 6,
    description: 'Privacy Policy & Cookies',
    category: 'Web Page',
    icon: '<i class="fa-regular fa-file fa-2xl"></i>',
    published: '25/12/2024',
    url: ''
  },
  {
    id: 7,
    description: 'Tobacco Pricing Changes - 2024 Budget',
    category: 'Excel Document',
    icon: '<i class="fa-regular fa-file-excel fa-2xl"></i>',
    published: '25/12/2024',
    url: ''
  },
  {
    id: 8,
    description: 'De komst van de hoogste windmolens ooit op land en het Ontwerpbesluit windturbines leefomgeving',
    category: 'PDF File',
    icon: '<i class="fa-regular fa-file-pdf fa-2xl"></i>',
    published: '25/09/2024',
    url: ''
  },
  {
    id: 9,
    description: 'product-info',
    category: 'Static Web Page',
    icon: '<i class="fa-regular fa-file-code fa-2xl"></i>',
    published: '26/09/2024',
    url: ''
  },
  {
    id: 10,
    description: 'safety-data-sheets',
    category: 'Static Web Page',
    icon: '<i class="fa-regular fa-file-code fa-2xl"></i>',
    published: '26/09/2024',
    url: ''
  }

];

let documentListHtml = document.querySelector('.document-list');
documentListHtml.innerHTML = ``;

const documentListRowMode = () => {
  documentListHtml.innerHTML = `<div class="rowMode">${searchDocuments.map(document => `
    <div class="documentList row py-4">
      <div class="col-xs-12 col-sm-1">
        <div class="icon">
          ${document.icon}
        </div>
      </div>
      <div class="col-xs-12 col-sm-11 details">
        <div class="col-12">
          <div class="description">
            <a href="/documents/search?name=${document.description}">${document.description}</a>
          </div>
        </div>
        <div class="categoryPublished my-1">
          <div class="row">
            <div class="col-xs-12 col-sm-11">
              <span class="category">${document.category}</span> 
              <span class="published">Published ${document.published}</span>
            </div>
            <div class="col-sm-1"><i class="fa-solid fa-chevron-right"></i></div>
          </div>
        </div>
      </div>
    </div>
  `).join('')}</div>`; 
}

const documentListGridMode = () => {
  documentListHtml.innerHTML = `<div class="gridMode">${searchDocuments.map(document => `
    <div class="documentList col-xs-12 col-sm-4 col-md-3 col-lg-2 py-3">
      <div class="content">
        <div class="icon d-flex justify-content-center">
          ${document.icon}
        </div>
        <div class="description my-1">
          <a href="/documents/search?name=${document.description}">${document.description}</a>
        </div>
        <div class="categoryPublished">
          <span class="published">Published ${document.published}</span>
          <span class="category">${document.category}</span>    
      </div>
    </div>
  </div>
  `).join('')}</div>`;
}

$(document).ready(function() {
  if (document.querySelector('#subCatCol').classList.contains('dark-blue-btn')) {
    documentListGridMode();  
  }
  if (document.querySelector('#subCatRow').classList.contains('dark-blue-btn')) {
    documentListRowMode();
  }

  document.querySelector('#subCatCol').addEventListener('click', () => {
    documentListGridMode();
  });
  
  document.querySelector('#subCatRow').addEventListener('click', () => {
    documentListRowMode();
  });

});
