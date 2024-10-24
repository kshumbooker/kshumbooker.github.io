const account = {
  customerNumber: 700108811,
  deliveryBranch: 'Northampton',
  clickCollectBranch: 'Wolverhampton'
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
    clickCollect: true,
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
    clickCollect: true
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
    clickCollect: true
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
    clickCollect: false
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
    clickCollect: true
  },
];

const sitecoreGlobalDatasource = {
  changeCcBranchBtn: `Change Your Click & Collect Branch`,
  browseOtherBranchBtn: `Browse Other Branch Range`,
  chooseCcBranchModal: {
    title: `Choose Your Click & Collect Branch`,
    text: `You can select a Branch below to either view the range or select a Branch to use for Click & Collect`
  },
  browseOtherBranchModal: {
    title: `Browse Your Other Branch`,
    text: `You can select a Branch below to view the range`  
  },
  productsInTrolleyModal: {
    title: `You have products in your trolley`,
    text: `You currently have products in your trolley. If you choose "Clear & Continue" your trolley will be cleared 
          before switching to your new branch. Otherwise, choose "X Cancel" and place your order in current Branch before changing switching.`
  },
  changingBranchModal: {
    title: `Changing Branch`,
    text: `We are changing your Click & Collect branch. Please wait`
  },
  changingTrolleyModal: {
    title: `Changing Trolleys`,
    text: `We are changing your trolley to. Please wait`
  }
}

const clickAndCollectBtn = () => {
  const button = document.createElement('a');
  button.href = '#';
  button.classList.add('btn', 'changeCcBranchBtn'
    , 'd-flex', 'align-items-center', 'justify-content-center', 'm-2');
  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', '#changeBranchModal');
  button.innerText = 'Change Click & Collect Branch';
  return button;
}

const browseOtherBranchRangesBtn = () => {
  const buttonDiv = document.createElement('div');
  const button = document.createElement('a');
  button.href = '#';
  button.classList.add('btn', 'browseOtherBranchRangesBtn', 'd-flex', 'align-items-center', 'justify-content-center');
  button.setAttribute('data-toggle', 'modal');
  button.setAttribute('data-target', '#changeBranchModal');
  button.innerText = sitecoreGlobalDatasource.browseOtherBranchBtn;
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
  <span class="detail-text">${account.clickCollectBranch}</span>
</div>
`;

const changeClickCollectBranch = document.createElement('div');
changeClickCollectBranch.classList.add('d-flex', 'changeCcBranchDiv');
changeClickCollectBranch.innerHTML = `<a href="#" class="btn account-preferences-button changeBranchModal" data-toggle="modal" data-target="#changeCcModal">Change Click & Collect Branch</a>`;

myBusinessDetails.parentElement.appendChild(changeClickCollectBranch);

}


const changeBranchModal = (modal) => {
  return `
  <div id="changeBranchModal" class="modal" tabindex="-1">
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
                      <td>${branch.currentBranch ? `<div class="yourSelectedBranch">Your current selected Branch</div>` : branch.clickCollect ? `Available at this Branch ` : `Extended Range Only` }</td>
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
  <div id="productsInTrolleyModal" class="modal" tabindex="-1">
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
          <button class="btn continue ml-2 btn-secondary" data-dismiss="modal">Clear & Continue</button>
          <button class="btn continue ml-2 btn-success" data-dismiss="modal">Continue</button>
        </div>
      </div>
    </div>
  </div>
  `;
}

const clickAndCollectTrolley = document.querySelector('#shopping-header-desktop #click-collect');
const deliveryTrolley = document.querySelector('#shopping-header-desktop #delivery');

if (clickAndCollectTrolley) {

  const mobileCheckoutDiv = document.querySelector('#shopping-header-mobile #mini-trolley-mobile #checkout');
  mobileCheckoutDiv.classList.remove('w-50');
  mobileCheckoutDiv.classList.add('w-100');
  mobileCheckoutDiv.lastElementChild.classList.remove('w-100');
  mobileCheckoutDiv.lastElementChild.classList.add('w-50');

  const clickAndCollectBranch = document.createElement('p');
  clickAndCollectBranch.classList.add('clickAndCollectBranch', 'p-0', 'm-0');
  clickAndCollectBranch.innerText = account.clickCollectBranch;
  clickAndCollectTrolley.children[0].after(clickAndCollectBranch);
  const greeting = document.querySelector('#shopping-header-desktop .greeting');
  greeting.insertAdjacentElement('afterend', clickAndCollectBtn());

  const clickAndCollectTrolleyMobile = document.querySelector('#shopping-header-mobile #mini-trolley-mobile #checkout');
  clickAndCollectTrolleyMobile.children[0].before(clickAndCollectBtn());
  const branchModal = document.createElement('div');
  branchModal.innerHTML = changeBranchModal(sitecoreGlobalDatasource.chooseCcBranchModal);
  document.body.appendChild(branchModal);
  const inTrolleyModal = document.createElement('div');
  inTrolleyModal.innerHTML = productsInTrolleyModal(sitecoreGlobalDatasource.productsInTrolleyModal);
  document.body.appendChild(inTrolleyModal);
} else if (deliveryTrolley) {
  const deliveryBranch = document.createElement('p');
  deliveryBranch.classList.add('deliveryBranch', 'p-0', 'm-0');
  deliveryBranch.innerText = account.deliveryBranch;
  deliveryTrolley.children[0].after(deliveryBranch);
  if (!clickAndCollectTrolley) {
    deliveryTrolley.parentElement.firstChild.before(browseOtherBranchRangesBtn());
    const deliveredTrolleyMobile = document.querySelector('#shopping-header-mobile #mini-trolley-mobile');
    const deliveredTrolleyMobileDiv = document.createElement('div');
    deliveredTrolleyMobileDiv.classList.add('col', 'my-3');
    deliveredTrolleyMobileDiv.appendChild(browseOtherBranchRangesBtn());
    deliveredTrolleyMobile.insertAdjacentElement('afterend', deliveredTrolleyMobileDiv);
  }
  const browseOtherBranchModalDiv = document.createElement('div');
  browseOtherBranchModalDiv.innerHTML = changeBranchModal(sitecoreGlobalDatasource.browseOtherBranchModal);
  document.body.appendChild(browseOtherBranchModalDiv);
  const inTrolleyModal = document.createElement('div');
  inTrolleyModal.innerHTML = productsInTrolleyModal(sitecoreGlobalDatasource.productsInTrolleyModal);
  document.body.appendChild(inTrolleyModal);
} else {
  //
}


const getChangeBranchModal = document.querySelector('#changeBranchModal');
const getProductsInTrolleyModal = document.querySelector('#productsInTrolleyModal');


const chooseBranchModalBtn = document.querySelector('#chooseBranchModalBtn');

const productsInTrolleyModalBtns = document.querySelectorAll('#productsInTrolleyModal .btn');

[...productsInTrolleyModalBtns].map(button => {
  button.addEventListener('click', () => {
    $('#productsInTrolleyModal').hide();
  });
});

chooseBranchModalBtn.addEventListener('click', () => {
  $('#productsInTrolleyModal').show();
});


