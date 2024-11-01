const account = {
  customerNumber: 700108811,
  deliveryBranch: 'Northampton',
  clickAndCollectBranch: 'Wolverhampton'
}

const branches = [
  {
    id: 266,
    name: 'Northampton',
    address: {
      street: 'Ravens Way', 
      address2: 'Crow Lane Industrial Estate',
      townCity: 'Northampton', 
      postCode: 'NN3 9UD'
    },
    clickAndCollect: true,
    currentBranch: true
  },
  {
    id: 503,
    name: 'Kettering',
    address: {
      street: 'Bath Road', 
      address2: '',
      townCity: 'Kettering', 
      postCode: 'NN16 9ND'
    },
    clickAndCollect: true
  },
  {
    id: 533,
    name: 'Bedford',
    address: {
      street: 'Elm Farm Industrial Estate', 
      address2: 'Edison Road',
      townCity: 'Bedford', 
      postCode: 'MK41 0HU'
    },
    clickAndCollect: true
  },
  {
    id: 329,
    name: 'Luton',
    address: {
      street: 'Camford Way', 
      address2: 'Sundon Park Road',
      townCity: 'Luton', 
      postCode: 'LU3 3AN'
    },
    clickAndCollect: false
  },
  {
    id: 316,
    name: 'Peterborough',
    address: {
      street: 'Woodston Industrial Estate Morley Way', 
      address2: 'Off Shrewsbury Avenue',
      townCity: 'Peterborough', 
      postCode: 'PE2 7BP'
    },
    clickAndCollect: true
  },
];

const sitecoreGlobalDatasource = {
  changeCcBranchBtn: `Change Your Click & Collect Branch`,
  browseOtherBranchBtn: `Browse Other Branch Range`,
  chooseCcBranchModal: {
    title: `Choose Your Click & Collect Branch`,
    text: `You can select a Branch below to either view the range or select a Branch to use for Click & Collect.`
  },
  browseOtherBranchModal: {
    title: `Browse Your Other Branch`,
    text: `You can select a Branch below to view the range.`  
  },
  productsInTrolleyModal: {
    title: `You have products in your trolley`,
    text: `You currently have products in your trolley. If you choose "Clear & Continue" your trolley will be cleared 
          before switching to your new branch. Otherwise, choose "X Cancel" and place your order in current Branch before changing switching.`
  },
  changingBranchModal: {
    title: `Changing Branch`,
    text: `We are changing your <strong>"TROLLEY_TYPE"</strong> branch. Please wait.`
  },
  switchingTrolleyModal: {
    title: `Changing Trolleys`,
    text: `We are changing your trolley to <strong>"TROLLEY_TYPE"</strong>. Please wait.`
  }
}

const homeBranchRangeBtns = (buttonVars, size = 'normal', percent = '') => {
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('homeBranchRangeBtnDiv');
  if (percent !== '') {
    buttonDiv.classList.add('w-50', 'px-2');
  }
  const button = document.createElement('a');
  button.href = '#';
  button.classList.add('btn', buttonVars.type, size, 'd-flex', 'align-items-center', 'justify-content-center');
  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', '#changeBranchModal');
  button.innerText = buttonVars.text;

  buttonDiv.appendChild(button);
  return buttonDiv;
}


const myBusinessDetails = document.querySelector('#business-details .Details');
if (myBusinessDetails) {
myBusinessDetails.innerHTML = ``;

myBusinessDetails.innerHTML = `
<div>
  <span class="detail-label">My Delivery Branch:</span>
  <span class="detail-text">${account.deliveryBranch}</span>
</div>
<div>
  <span class="detail-label">My Click & Collect Branch:</span>
  <span class="detail-text">${account.clickAndCollectBranch}</span>
</div>
`;

const changeClickCollectBranch = document.createElement('div');
changeClickCollectBranch.classList.add('d-flex', 'changeCcBranchDiv');
changeClickCollectBranch.innerHTML = `<a href="#" class="btn account-preferences-button changeBranchModal" data-toggle="modal" data-target="#changeCcModal">Change Click & Collect Branch</a>`;

myBusinessDetails.parentElement.appendChild(changeClickCollectBranch);

}


const changeBranchModal = (modal) => {
  return `
  <div id="changeBranchModal" class="modal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">${modal.title}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>${modal.text}</p>
          <div id="changeBranch-search-input" class="input-group">
            <input name="changeBranch" type="text" class="form-control" placeholder="Search by Branch name, Town or Postcode">
            <div class="input-group-append search-button">
              <button class="btn btn-outline-secondary" type="submit">
                <i class="fas fa-search fa-lg" onclick="$(this).closest('form').submit();"></i>
              </button>
            </div>
          </div>
          <div class="branches-result my-3">
              <table class="table">
                <thead> 
                  <tr> 
                    <th>Branch Name</th>
                    <th>Address</th>
                    <th>Click And Collect</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                  ${branches.map(branch => `
                    <tr>
                      <td>${branch.name}</td>
                      <td>${branch.address.street ? branch.address.street + `,<br>` : ''}${branch.address.address2 ? branch.address.address2 + `,<br>` : ''} ${branch.address.townCity ? branch.address.townCity + `,<br>` : ''} ${branch.address.postCode ? branch.address.postCode : ''}</td>
                      <td>${branch.currentBranch ? `<div class="yourSelectedBranch">Your current selected Branch</div>` : branch.clickAndCollect ? `Available at this Branch ` : `Extended Range Only` }</td>
                      <td class="selectBranch">
                        <input type="radio" class="form-check-input" name="selectBranch" ${branch.currentBranch == true ? `checked` : ``}>
                      </td>
                    </tr>`).join('')}
                </tbody>
              </table>
            </div>
        </div>
        <div class="modal-footer claim-form-links">
          <button class="btn cancel ml-2" data-dismiss="modal"><i class="fas fa-times"></i>Cancel</button>
          <button class="btn continue ml-2 btn-success" data-dismiss="modal" data-toggle="modal" id="chooseBranchModalBtn">Choose Branch</button>
        </div>
      </div>
    </div>
  </div>
  `;
}

const productsInTrolleyModal = (modal) => {
  return `
  <div id="productsInTrolleyModal" class="modal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">${modal.title}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>${modal.text}</p>
        </div>
        <div class="modal-footer claim-form-links">
          <button class="btn cancel ml-2" data-dismiss="modal"><i class="fas fa-times"></i>Cancel</button>
          <button class="btn clearAndContinue ml-2 btn-success">Clear & Continue</button>
        </div>
      </div>
    </div>
  </div>
  `;
}


const changingBranchTrolleyModal = (modal) => {
  return `
  <div id="changingBranchTrolleyModal" class="modal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">${modal.title}</h4>
        </div>
        <div class="modal-body">
          <p>${modal.text}</p>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <i class="fa fa-spinner fa-spin"></i>
        </div>
      </div>
    </div>
  </div>
  `;
}

const switchTrolleyModal = (modal) => {
  return `
  <div id="switchTrolleyModal" class="modal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">${modal.title}</h4>
        </div>
        <div class="modal-body">
          <p>${modal.text}</p>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <i class="fa fa-spinner fa-spin"></i>
        </div>
      </div>
    </div>
  </div>
  `;
}


const clickAndCollectTrolley = document.querySelector('#shopping-header-desktop #click-collect');
const clickAndCollectTrolleyMobile = document.querySelector('#shopping-header-mobile #mini-trolley-mobile');
const mobileCheckoutDiv = document.querySelector('#shopping-header-mobile #mini-trolley-mobile #checkout');
const deliveryTrolley = document.querySelector('#shopping-header-desktop #delivery');
const trolleyTypeText = document.querySelector('#click-collect') ? document.querySelector('#click-collect .title').innerText : '';

const injectHbrChangeCcButton = () => {
  const buttonVars = trolleyTypeText === 'Extended Range Collect' ? {
    type: 'browseOtherBranchRangesBtn',
    text: sitecoreGlobalDatasource.browseOtherBranchBtn
  } : {
    type: 'changeCcBranchBtn',
    text: sitecoreGlobalDatasource.changeCcBranchBtn 
  }
  const hasRequestDeliveriesBtn = document.querySelector('#collect-no-delivery-option-button');
  
  if (!isDelivery) { 
    clickAndCollectTrolleyMobile.children[0].after(homeBranchRangeBtns(buttonVars, 'full'));
  } else {
    mobileCheckoutDiv.before(homeBranchRangeBtns(buttonVars, 'full', 50));
  }

  const greeting = document.querySelector('#shopping-header-desktop .greeting');
  
  if (!hasRequestDeliveriesBtn && !isDelivery) {
    const trolley = document.querySelector('#shopping-header-desktop #mini-trolley #click-collect');
    trolley.insertAdjacentElement('beforebegin', homeBranchRangeBtns(buttonVars, 'small'));
  } else {
    greeting.insertAdjacentElement('afterend', homeBranchRangeBtns(buttonVars));
  }
  trolleyTypeText === 'Extended Range Collect' ? chooseOrBrowseModal(sitecoreGlobalDatasource.browseOtherBranchModal) : chooseOrBrowseModal(sitecoreGlobalDatasource.chooseCcBranchModal);
}

const injectHbrDeliveryButton = () => {
 
  const buttonVars = {
    type: 'browseOtherBranchRangesBtn',
    text: sitecoreGlobalDatasource.browseOtherBranchBtn
  }
    deliveryTrolley.parentElement.firstChild.before(homeBranchRangeBtns(buttonVars));
    const deliveredTrolleyMobile = document.querySelector('#shopping-header-mobile #mini-trolley-mobile');
    const deliveredTrolleyMobileDiv = document.createElement('div');
    deliveredTrolleyMobileDiv.classList.add('col', 'my-2');
    deliveredTrolleyMobileDiv.appendChild(homeBranchRangeBtns(buttonVars));
    deliveredTrolleyMobile.insertAdjacentElement('afterend', deliveredTrolleyMobileDiv);
    chooseOrBrowseModal(sitecoreGlobalDatasource.browseOtherBranchModal);
}

const chooseOrBrowseModal = (chooseOrBrowse) => {
  const branchModal = document.createElement('div');
  branchModal.innerHTML = changeBranchModal(chooseOrBrowse);
  document.body.appendChild(branchModal);
  const inTrolleyModal = document.createElement('div');
  inTrolleyModal.innerHTML = productsInTrolleyModal(sitecoreGlobalDatasource.productsInTrolleyModal);
  document.body.appendChild(inTrolleyModal);
}


const addHomeBranchRangeName = (type) => {
  const branch = document.createElement('p');
  const branchType = type + 'Branch'
  branch.classList.add(branchType, 'p-0', 'm-0');
  branch.innerText = account[branchType];
  eval(type + 'Trolley').children[0].after(branch);
}


const populateChangingBranchModal = () => {
  const changeBranchTrolleyModal = document.createElement('div');
  changeBranchTrolleyModal.innerHTML = changingBranchTrolleyModal(sitecoreGlobalDatasource.changingBranchModal);
  document.body.appendChild(changeBranchTrolleyModal);
}


if (clickAndCollectTrolley && deliveryTrolley) {
  injectHbrChangeCcButton();
  $('#shopping-header-desktop .changeCcBranchBtn').css('margin-right', '5px');
  addHomeBranchRangeName('clickAndCollect');
  addHomeBranchRangeName('delivery');

  populateChangingBranchModal();
} else if (clickAndCollectTrolley) {
  injectHbrChangeCcButton();
  addHomeBranchRangeName('clickAndCollect');
  populateChangingBranchModal();
} else {
  injectHbrDeliveryButton();
  addHomeBranchRangeName('delivery');
  populateChangingBranchModal();
}

const getChangeBranchModal = document.querySelector('#changeBranchModal');
const getProductsInTrolleyModal = document.querySelector('#productsInTrolleyModal');

const chooseBranchModalBtn = document.querySelector('#chooseBranchModalBtn');

const productsInTrolleyModalBtns = document.querySelectorAll('#productsInTrolleyModal .btn');

[...productsInTrolleyModalBtns].map(button => {
  
  if (button.classList.contains('cancel')) {
    button.addEventListener('click', () => {
      $('#productsInTrolleyModal').hide();
    });
  }
  if (button.classList.contains('continue') || button.classList.contains('clearAndContinue')) {
    button.addEventListener('click', () => {
      $('#productsInTrolleyModal').hide();
      $('#changingBranchTrolleyModal').show();
    });
  }
});


if (chooseBranchModalBtn) {
  chooseBranchModalBtn.addEventListener('click', () => {
    $('#productsInTrolleyModal').show();
  });
}

const alternativeButtonPosition = () => {
  const miniTrolley = document.querySelector('#shopping-header-desktop #mini-trolley #click-collect');
  const changeCcBranchBtn = document.querySelector('.changeCcBranchBtn');
  $('#shopping-header-desktop .changeCcBranchBtn').attr('style', 'width: auto !important; margin-top: 5px; font-size: 9px; height: fit-content;');
  $('#shopping-header-desktop #search-bar .header-button').css('margin-top', '0');
  $('#shopping-header-desktop #delivery').css('align-content', 'end');
  miniTrolley.children[0].before(changeCcBranchBtn);
}


const trolleyTypeOnLoad = () => {

  const summaryHeader = document.querySelector('#booker_trolley_first_aside').firstElementChild;
  const deliveryMethodSummaryHeader = document.createElement('div');

  if (trolleyTypeText == 'Extended Range Collect') {
    deliveryMethodSummaryHeader.classList.add('clickAndCollect');
    deliveryMethodSummaryHeader.innerHTML = `<span class="clickAndCollectBranch">Order for <strong>Extended Range Collect</strong> at <strong>${account.deliveryBranch}</strong></span>`;
    summaryHeader.insertAdjacentElement('afterbegin', deliveryMethodSummaryHeader);
  }
  else if (isClickAndCollect || isClickAndCollect && isDelivery) {
    deliveryMethodSummaryHeader.classList.add('clickAndCollect');
    deliveryMethodSummaryHeader.innerHTML = `<span class="clickAndCollectBranch">Order for <strong>Click And Collect</strong> at <strong>${account.clickAndCollectBranch}</strong></span>`;
    summaryHeader.insertAdjacentElement('afterbegin', deliveryMethodSummaryHeader);
  } else if (isDelivery) {
    deliveryMethodSummaryHeader.classList.add('delivery');
    deliveryMethodSummaryHeader.innerHTML = `<span class="deliveryBranch">Order for <strong>Delivery</strong> from <strong>${account.deliveryBranch}</strong></span>`;
    summaryHeader.insertAdjacentElement('afterbegin', deliveryMethodSummaryHeader);
  } 
    
}

if (document.querySelector('#booker_trolley_first_aside') !== null) {
  trolleyTypeOnLoad();
}

const currentUrl = window.location.search;

const urlParams = new URLSearchParams(currentUrl);

const alternative = urlParams.get('view') ? urlParams.get('view') : '';
if (alternative == 'alt') {
  alternativeButtonPosition();
}

if (document.querySelector('#click-collect') && document.querySelector('#delivery')) {
  const switchTrolleyModalDiv = document.createElement('div');
  switchTrolleyModalDiv.innerHTML = switchTrolleyModal(sitecoreGlobalDatasource.switchingTrolleyModal);
  document.body.appendChild(switchTrolleyModalDiv);
  document.querySelector('#click-collect').addEventListener('click', () => {     
    $('#switchTrolleyModal').show();
  });
  document.querySelector('#delivery').addEventListener('click', () => {
    $('#switchTrolleyModal').show();
  });
}
