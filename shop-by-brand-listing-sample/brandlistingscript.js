let alphabetNav = document.getElementById("alphabetNav");
    let brandListingData = document.getElementById("brandListingData");
    let featuredBrandsData = document.getElementById("featuredBrandsData");

    const loadAlphabetNav = () => {
        alphabetNav.innerHTML = `<a href="#" class="alphabetFilter active">ALL</a>`;
        alphabetNav.innerHTML += brandsData.map(brand => {
            return (brand.brands.length == 0 || allBrandsInactive(brand)) ? `<a href="#" class="alphabetFilter disabled" disabled>${brand.id}</a>` : `<a href="#" class="alphabetFilter">${brand.id}</a>`;
        }).join("");

        const alphabetFilter = document.querySelectorAll('.alphabetFilter');
        
        [...alphabetFilter].map(alphabet => alphabet.addEventListener('click', () => { loadBrandsData(alphabet.text); }));
    }

    const getFeaturedBrands = (alphabet) => {
        let featuredBrandsArr = [];
        brandsData.map(brand => {
            brand.brands.map(b => {
                if (b.featured == true) {
                    b.alphabet = brand.id;
                    featuredBrandsArr.push(b);
                }
            })
        });
        return featuredBrandsArr;      
    }

    const featuredBrandHtml = (img, brand, url) => {
        let html = `
        <a href="${url}">
            <div class="card m-3">
                <div class="card-body align-items-center d-flex justify-content-center">
					<img src=${img} class="img-fluid border-0 my-auto featuredImg" />					
                </div>
                <div class="container">
                    <p class="booker">${brand}</p>
                </div>                   
            </div>
        </a>
        `
        return html;
    }

    const addActiveClassToAlphabet = () => {
        let alphabets = alphabetNav.getElementsByClassName('alphabetFilter');
        
        for (let i = 0; i < alphabets.length; i++) {
            alphabets[i].addEventListener('click', function() {
                let current = document.getElementsByClassName('active');     
                if (current.length > 0) {
                    current[0].className = current[0].className.replace('active', '');
                }
                this.className += ' active';
            })   
        }
    }


    const loadBrandsData = (alphabet = '') => {
        addActiveClassToAlphabet();
        loadFeaturedBrandData(alphabet);
       loadBrandListingData(alphabet);
    }

    const loadFeaturedBrandData = (alphabet = '') => {
        let featuredBrands = getFeaturedBrands(alphabet);
        featuredBrandsData.innerHTML = ``;
        featuredBrandsData.innerHTML += featuredBrands.filter(function(brand) {
            if (alphabet != '' && alphabet != 'ALL') {
                return brand.alphabet === alphabet
            }
            return brand
        }).map(b => featuredBrandHtml(b.img, b.name, b.url)).join("");
        if (featuredBrandsData.innerHTML.length > 0) {
            featuredBrandsData.innerHTML = `<div class="container mt-3">FEATURED STORES</div>${featuredBrandsData.innerHTML}`;
        }
    }

    const allBrandsInactive = (item) => {
        return item.brands.every(i => i.active == false);
    }


    const loadBrandListingData = (alphabet = '') => {
            brandListingData.innerHTML = '';
            brandListingData.innerHTML += brandsData.filter(function(item) {
                if (alphabet != '' && alphabet != 'ALL') {
                    return item.id === alphabet
                }
                return (item.brands.length > 0 && !allBrandsInactive(item)) ? item : false 
            }).map(brand => `
                <hr>
                    <div class="row">
                    <h4 class="booker text-left position-absolute">
                        ${brand.id}
                    </h4>
                    </div>
                <div class="row">
                  ${brand.brands.map((b) => {
                         return b.active == true ? `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 p-1"><a href="${b.url}" class="brandLink">${b.name}</a></div>` : ``
                  }).join("")}
                </div>
            `).join("");
    }

    loadAlphabetNav();
    loadBrandsData('ALL');
