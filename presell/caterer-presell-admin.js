const branch = [{
    125: 'A1 Edinburgh (125)',
    454: 'Aberdeen (454)',
    590: 'Aberdeen Makro (590)',
    103: 'Aberystwyth (103)',
    470: 'Acton (470)',
    615: 'Advanced Supply Chain (615)',
    321: 'Aldershot (321)',
    665: 'Andover (665)',
    369: 'Ardwick (369)',
    322: 'Avonmouth (322)',
    171: 'Ayr (171)',
    361: 'Barnsley (361)',
    213: 'Barnstaple (213)',
    176: 'Barrow (176)',
    132: 'Basingstoke (132)',
    182: 'Bath (182)',
    562: 'Beckton (562)',
    533: 'Bedford (533)',
    592: 'Belfast Makro (592)',
    148: 'Birkenhead (148)',
    150: 'Blackburn (150)',
    345: 'Blackpool (345)',
    519: 'Boston (519)',
    303: 'Bournemouth (303)',
    234: 'Bradford (234)',
    402: 'Bridgend (402)',
    307: 'Brighton (307)',
    423: 'Bristol (423)',
    580: 'Bristol Makro (580)',
    222: 'Broadstairs (222)',
    664: 'BRP Didcot (664)',
    463: 'Burnley (463)',
    184: 'Burton-on-Trent (184)',
    532: 'Byfleet (532)',
    544: 'Cambridge (544)',
    550: 'Canterbury (550)',
    341: 'Cardiff (341)',
    426: 'Cardiff (Leckwith) (426)',
    588: 'Cardiff Makro (588)',
    153: 'Carlisle (153)',
    124: 'Carmarthen (124)',
    229: 'Castleford (229)',
    574: 'Charlton Makro (574)',
    136: 'Chelmsford (136)',
    433: 'Cheltenham (433)',
    344: 'Chester (344)',
    275: 'Chesterfield (275)',
    133: 'Chichester (133)',
    283: 'Clacton (283)',
    376: 'Colchester (376)',
  302: 'Coventry (302)',
  326: 'Cowes (326)',
  221: 'Crayford (221)',
  536: 'Croydon (536)',
  474: 'Cwmbran (474)',
  306: 'Dagenham (306)',
  205: 'Darlington (205)',
  377: 'Derby (377)',
  603: 'Didcot Booker Direct (603)',
  173: 'Dumfries (173)',
  482: 'Dundee (482)',
  126: 'Dunfermline (126)',
  138: 'Eastbourne (138)',
  314: 'Eastleigh (314)',
  583: 'Edinburgh Makro (583)',
  455: 'Elgin (455)',
  667: 'Elmsall (667)',
  581: 'Enfield Makro (581)',
  338: 'Exeter (338)',
  597: 'Exeter Makro (597)',
  172: 'Falkirk (172)',
  663: 'Fareham (663)',
  579: 'Fareham Makro (579)',
  261: 'Farnworth (261)',
  295: 'Folkestone (295)',
  194: 'Galashiels (194)',
  208: 'Gateshead (208)',
  348: 'Glasgow (348)',
  372: 'Gloucester (372)',
  109: 'Gorton (Manchester) (109)',
  521: 'Grantham (521)',
  356: 'Greenford (356)',
  177: 'Greenock (177)',
  614: 'GREGORY DISTRIBUTION. (614)',
  144: 'Gt Yarmouth (144)',
  572: 'Halesowen Makro (572)',
  168: 'Hamilton (168)',
  236: 'Harrogate (236)',
  556: 'Hastings (556)',
  604: 'Hatfield Booker Direct (604)',
  131: 'Haverfordwest (131)',
  358: 'Haydock (358)',
  602: 'Haydock Booker Direct (602)',
  127: 'Hayle (127)',
  669: 'Hemel Hempstead (669)',
  254: 'Hereford (254)',
  290: 'High Wycombe (290)',
  418: 'Holt (418)',
  268: 'Huddersfield (268)',
  427: 'Hull (427)',
  586: 'Hull Makro (586)',
  457: 'Inverness (457)',
  378: 'Ipswich (378)',
  598: 'Ipswich Makro (598)',
  434: 'Irvine (434)',
  503: 'Kettering (503)',
  524: 'Kings Lynn (524)',
  366: 'Kingswinford (366)',
  485: 'Kirkcaldy (485)',
  157: 'Lancaster (157)',
  575: 'Leeds Makro (575)',
  185: 'Leicester (185)',
  584: 'Leicester Makro (584)',
  165: 'Leigh (165)',
  169: 'Lincoln (169)',
  163: 'Liverpool (163)',
  571: 'Liverpool Makro (571)',
  608: 'Livingston (608)',
  601: 'Livingston Booker Direct (601)',
  311: 'Llandudno (311)',
  318: 'Lowestoft (318)',
  329: 'Luton (329)',
  110: 'Macclesfield (110)',
  570: 'Manchester Makro (570)',
  287: 'Mansfield (287)',
  375: 'Medway (375)',
  312: 'Merthyr Tydfil (312)',
  260: 'Middleton (260)',
  486: 'Morpeth (486)',
  203: 'Newcastle (203)',
  476: 'Newquay (476)',
  232: 'Newton Abbot (232)',
  558: 'Nine Elms (558)',
  309: 'North Weald-Epping (309)',
  266: 'Northampton (266)',
  111: 'Northwich (111)',
  317: 'Norwich (317)',
  596: 'Norwich Makro (596)',
  327: 'Nottingham (327)',
  331: 'Nuneaton (331)',
  437: 'Oban (437)',
  534: 'Oxford (534)',
  373: 'Paignton (373)',
  487: 'Paisley (487)',
  622: 'Perth (622)',
  316: 'Peterborough (316)',
  328: 'Plymouth (328)',
  587: 'Poole Makro (587)',
  304: 'Portsmouth (304)',
  593: 'Preston Makro (593)',
  599: 'Queensferry Makro (599)',
  594: 'Rayleigh Makro (594)',
  585: 'Reading Makro (585)',
  560: 'Redhill (560)',
  267: 'Redruth (267)',
  305: 'Rugby (305)',
  137: 'Salisbury (137)',
  354: 'Saltley (354)',
  219: 'Sandown (219)',
  217: 'Scarborough (217)',
  223: 'Scunthorpe (223)',
  166: 'Shawfield (166)',
  308: 'Sheffield Booker (308)',
  578: 'Sheffield Makro (578)',
  259: 'Shrewsbury (259)',
  313: 'Sidcup (313)',
  527: 'Skegness (527)',
  273: 'Slough (273)',
  325: 'Southend (325)',
  164: 'Southport (164)',
  231: 'St Austell (231)',
  561: 'St Pancras (561)',
  337: 'Stirchley (337)',
  623: 'Stirling (623)',
  276: 'Stockport (276)',
  279: 'Stockton (279)',
  339: 'Stoke (339)',
  591: 'Stoke Makro (591)',
  351: 'Sunbury (351)',
  201: 'Sunderland (201)',
  332: 'Swansea (332)',
  195: 'Swindon (195)',
  190: 'Tamworth (190)',
  193: 'Taunton (193)',
  595: 'Teesside Makro (595)',
  355: 'Telford (355)',
  666: 'Thamesmead (666)',
  395: 'Tottenham (395)',
  130: 'Trowbridge (130)',
  258: 'Tunbridge Wells (258)',
  191: 'Warwick (191)',
  573: 'Washington Makro (573)',
  319: 'Watford (319)',
  668: 'Wellingborough (668)',
  600: 'Wellingborough Booker Direct (600)',
  447: 'Weston-Super-Mare (447)',
  140: 'Weymouth (140)',
  353: 'Wimbledon (353)',
  357: 'Wolverhampton (357)',
  380: 'Wolverhampton (380)',
  280: 'Worcester (280)',
  175: 'Workington (175)',
  179: 'Worthing (179)',
  156: 'Wrexham (156)',
  607: 'Wrexham (607)',
  479: 'Yeovil (479)',
  343: 'York (343)'
  }];

const formattedBranches = Object.entries(branch[0]).map(([key, value]) => ({
  code: Number(key),
  name: value,
  active: false
}));


if (document.getElementById('checkboxTsAndCs')) {
  document.querySelector('#checkboxTsAndCs').addEventListener('click', () => {
     const divTsAndCs = document.querySelector('#divTsAndCs');
     const fileTsAndCs = document.getElementById('fileTsAndCs');
     const textTsAndCs = document.getElementById('textTsAndCs');
     divTsAndCs.classList.toggle('d-none');
     fileTsAndCs.disabled = !fileTsAndCs.disabled;
     textTsAndCs.disabled = !textTsAndCs.disabled;
     fileTsAndCs.required = !fileTsAndCs.required;
     textTsAndCs.required = !textTsAndCs.required;
  });
}
  

if (document.getElementById('presell_button')) {

  const updateTotals = document.querySelector('#presell_button .update-total');

  updateTotals.classList.add('disabled');
}

class CPA_StyledComponent extends HTMLElement {
constructor() {
    super();
}

addCustomStyle(elementName) {

    if (document[elementName] === undefined) {
        document[elementName] = document.createElement("style");
        document[elementName].textContent = this.customStyle();

        document.head.appendChild(document[elementName]);
    }
}

addCustomSingletonElement(elementName) {

    if (document[elementName] === undefined) {
        document[elementName] = document.createElement("div");
        document[elementName].innerHTML = this.customSingletonElement();

        document.body.appendChild(document[elementName]);
    }
}

}


class CPA_Element extends HTMLElement {
constructor() {
  super();
  this.code = this.getAttribute('data-code');
  this.name = this.getAttribute('data-name');
  this.icon = this.getAttribute('data-icon');
}

connectedCallback() {
  this.innerHTML = `<span class="text-center mw-100 d-inline-block customerElement rounded" value="${this.code}">${this.name} <i class="fas fa-solid ${this.icon} pl-1"></i></span>`;
}
}



class CPA_Branches extends CPA_StyledComponent {
constructor() {
  super();
  this.formattedBranches = formattedBranches;
}

customStyle = () =>
`
cpa-branches .selectedBranches .choosePrompt {
  padding-left: 0.4em;
  color: #495057;
}

cpa-branches i.fa-caret-down {
  border: none !important;
}

cpa-branches .availableBranchesList cpa-element.elementActive {
  display: none;
}

cpa-branches .selectedBranches cpa-element.elementInactive {
  display: none;
}

cpa-branches .availableBranchesList cpa-element.searchNoMatch {
  display: none;
}


cpa-element {
  border-radius: 2px;
  cursor: pointer;
  font-size: 0.75rem;
  white-space: nowrap;
  margin-left: 0.25em;        
  margin-right: 0.25em;
  margin-bottom: 0.25em;
  padding-left: 0.25em;
  padding-right: 0.25em;
}

cpa-branches .selectedBranches cpa-element {
  background: #4A5DA8;
  border: 1px solid #4A5DA8;
  color: white;
}

cpa-branches div.cpa-branches {
  border-radius: 4px;
  border: 2px solid #2356AA;
  min-height: calc(1.5em + .75rem + 2px);
}
cpa-branches .availableBranches {
  border-top: 2px solid #2356AA;
}

cpa-branches .availableBranches .availableBranchesList {
  max-height: 20em;
  overflow-y: scroll;
}

cpa-branches .availableBranches .branchSearch {
  border: none;
  border-bottom: 1px solid lightgray;
  font-size: 0.75rem;
  outline: none;
  box-shadow: none;
}

cpa-branches .availableBranches .branchSearch:focus {
  outline: none;
  box-shadow:none;
}
`;

template = () =>
`
<div class="cpa-branches">
<div class="container col-12 p-0 mt-0 mb-0">
  <div class="row toggleAvailable">
      <div class="col-10 selectedBranches p-0 mt-1">
          <div class="align-items-center p-0">
              <div class="row d-flex">
                  <span class="choosePrompt">Choose...</span>
                  ${this.formattedBranches.map(branch => `<cpa-element class="cpa-element ${branch.active == true ? 'elementActive' : 'elementInactive'}" data-code="${branch.code}" data-name="${branch.name}" data-active="${branch.active}" data-icon="fa-xmark"></cpa-element>`).join('')}
              </div>
          </div>
      </div>
      <div class="col-2 text-right p-0">
          <i class="fas fa-solid fa-caret-down border p-1"></i>
      </div>
  </div>
</div>
<div class="container p-0 bg-light text-dark availableBranches d-none">
<div class="row m-0">
    <input type="text" class="col-12 pl-2 m-0 branchSearch ${this.showSearch == 'true' ? '' : 'd-none' }" placeholder="Search..."/>
</div>
<div class="row ml-1 p-0 text-dark bg-white">
  <div class="col-12 p-0">
    <div class="row m-0">
      <div class="col-12 p-0 availableBranchesList">
        ${this.formattedBranches.map(branch => `<cpa-element class="row cpa-element ${branch.active == true ? 'elementActive' : 'elementInactive'}" data-code="${branch.code}" data-name="${branch.name}" data-active="${branch.active}" data-icon="fa-plus"></cpa-element>`).join('')}
      </div>
    </div>
  </div>
</div>
</div>
</div>
`;

connectedCallback() {     
this.searchTimer = -1;
this.branches = this.formattedBranches;
super.addCustomStyle('cpa_branches_style');
this.modelPrefix = this.getAttribute('data-model-prefix');
this.showSearch = this.getAttribute('data-show-search');
this.render();
}

showChoosePrompt() {

if (this.branches.some((branch) => branch.active)) {
    this.querySelector('.selectedBranches .choosePrompt').classList.add('d-none');
} else {
    this.querySelector('.selectedBranches .choosePrompt').classList.remove('d-none');
}
}


clickBranch = (element) => {

let elementCode = element.getAttribute('data-code');

this.branches.forEach(branch => {
    if (elementCode == branch.code) {
        branch.active = !branch.active;
        element.setAttribute('data-active', !element.getAttribute('data-active'));

        this.querySelector('.selectedBranches cpa-element[data-code="' + elementCode + '"]').classList.toggle('elementInactive');

        this.querySelector('.selectedBranches cpa-element[data-code="' + elementCode + '"]').classList.toggle('elementActive');

        this.querySelector('.availableBranchesList cpa-element[data-code="' + elementCode + '"]').classList.toggle('elementInactive');

        this.querySelector('.availableBranchesList cpa-element[data-code="' + elementCode + '"]').classList.toggle('elementActive');
        
        this.querySelector('.' + this.modelPrefix + branch.code).value = branch.active;
    }
});

  this.showChoosePrompt();
}

render() {

  this.innerHTML = `${this.template().trim()}`;

  this.querySelector('.toggleAvailable').addEventListener('click', (e) => {
      e.preventDefault();

      this.querySelector('.availableBranches').classList.toggle('d-none');
  });
  

  const elements = this.querySelectorAll('cpa-element'); 

  [...elements].map(element => {
      element.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          
          this.clickBranch(element);

      });
  });

  this.querySelector('.branchSearch').addEventListener('keydown', () => {
    this.clearSearchTimer();
    this.searchTimer = setTimeout(this.search, 500, this);
});

  const inputHtml = document.createElement('div');
  inputHtml.className = this.modelPrefix + 'inputs';
  inputHtml.id = this.modelPrefix + 'inputs';

  this.branches.map((branch, index) => {
    inputHtml.innerHTML += `
    <input id="${this.modelPrefix}${index}__code" name="${this.modelPrefix}[${index}].code" type="hidden" value="${branch.code}">
    <input id="${this.modelPrefix}${index}__name" name="${this.modelPrefix}[${index}].name" type="hidden" value="${branch.name}">
    <input class="${this.modelPrefix}${branch.code}" data-val="true" name="${this.modelPrefix}[${index}].active" id="${this.modelPrefix}${index}__active" type="hidden" value="false">`;
  });

this.querySelector('.cpa-branches').after(inputHtml);

const catererOrRetailer = document.createElement('div');
  catererOrRetailer.className = 'catererOrRetailer';
  catererOrRetailer.id = 'catererOrRetailer';
  catererOrRetailer.innerHTML = `<input id="catererOrRetailerInput" name="catererOrRetailerInput" type="hidden" value="notApplicable">
`;

  document.querySelector('#isCatererOrRetailer').after(catererOrRetailer);

  document.getElementById('isCatererOrRetailer').addEventListener('change', (event) => {
    document.getElementById('catererOrRetailerInput').value = event.target.value;
    event.target.value !== 'notApplicable' ? document.querySelector('.presellSelectedBranches').classList.remove('d-none') : document.querySelector('.presellSelectedBranches').classList.remove('d-none') ? !document.querySelector('.presellSelectedBranches').classList.contains('d-none') : document.querySelector('.presellSelectedBranches').classList.add('d-none');
    if (event.target.value === 'notApplicable') {
      this.branches.map(branch => document.querySelector('.' + this.modelPrefix + branch.code).value = false);
      [...document.querySelectorAll('cpa-element')].map(cpa => {
        if (cpa.classList.contains('elementActive')) {
          cpa.classList.remove('elementActive');
          cpa.classList.add('elementInactive');
        }
      });
      document.querySelector('.choosePrompt').classList.remove('d-none');
    }
  });

  const availableBranchesDiv = document.querySelector('.availableBranches');
  const cpaBranchesDiv = document.querySelector('.cpa-branches');
  const choosePromptSpan = document.querySelector('.selectedBranches .choosePrompt');

  document.addEventListener('click', (e) => {
    e.stopPropagation();
    if (cpaBranchesDiv.contains(e.target) === false && availableBranchesDiv.contains(e.target) === false && availableBranchesDiv.classList.contains('d-none') === false) {
      availableBranchesDiv.classList.toggle('d-none');
    }
  });

}

clearSearchTimer() {
clearTimeout(this.searchTimer);
this.searchTimer = -1;
}

search(presellBranch) {
presellBranch.clearSearchTimer();

var value = presellBranch.querySelector('.branchSearch').value.trim().toLowerCase();

if (value.length > 1) {
    [...presellBranch.querySelectorAll('.availableBranchesList cpa-element')].map(element => {
        element.classList.add('searchNoMatch');
    });
    [...presellBranch.querySelectorAll('.availableBranchesList cpa-element')].filter((element) => {
        if (element.getAttribute('data-name').toLowerCase().indexOf(value) > -1) {
            element.classList.remove('searchNoMatch');
        }
    });
} else {
    [...presellBranch.querySelectorAll('.availableBranchesList cpa-element')].map(element => {
        element.classList.remove('searchNoMatch');
    });
}

}

}


customElements.define('cpa-element', CPA_Element);
customElements.define('cpa-branches', CPA_Branches);




