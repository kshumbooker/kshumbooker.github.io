    function randomStockLevel() {
        let stockLevels = ['IN STOCK', 'LOW STOCK', 'NO STOCK'];
        let stock = stockLevels[Math.floor(Math.random() * stockLevels.length)];
        return stock;
    }


    /* get all products in "list" pages - ones where there are list and grid views */
    let productsList = document.querySelectorAll('.d-flex.product.row.product-model');

    /* List & mobile views */
    
    [...productsList].map((product) => {
    
        /* mock stock level data for each product - assumption for now is that a data attribute "data-stocklevel" is going to be served from the backend */ 

        //let stockLevel = stockLevelHtml(product.getAttribute('data-stocklevel'));
        product.setAttribute('data-stocklevel', randomStockLevel());
    
        let desktopProductNode = product.children[1].children[1].children[0].children[1].children[1];
        let mobileProductNode = product.children[1].children[1].children[1].children[0].children[0].children[1].children[0].children[1].children[1];


        // remove the current Add to List icon - also set .list-img to display none in the css
        desktopProductNode.children[0].children[0].src = '';

        // Add to List - change the "Add to List" text to be the icon component
        desktopProductNode.children[0].children[1].innerHTML = `<add-to-list></add-to-list>`;

        // to show or not show the note for each product is determined by this data attribute
        let showNote = desktopProductNode.children[1].getAttribute('data-show-note');

        // remove add note img, also set .note-img to display none in the css
        desktopProductNode.children[1].children[0].src = '';

        // replace "Add Note" url text with the icon
        desktopProductNode.children[1].children[1].innerHTML = `<add-to-note class="ml-2"></add-to-note>`;

        // remove flex-column class and add justify-content-center from parent div of the new list and note icons to make them line up better
        desktopProductNode.classList.remove('flex-column');
        desktopProductNode.classList.add('justify-content-center', 'rtsIcons');

        // remove the classes from the div wrapped around the icons
        desktopProductNode.children[0].classList.remove('col', 'd-flex', 'flex-row');
        desktopProductNode.children[1].classList.remove('col', 'd-flex', 'flex-row');

        let stockLevelDiv = document.createElement('div');
        stockLevelDiv.classList.add('stockLevelDiv');
        stockLevelDiv.innerHTML = `<stock-label data-stocklevel="${product.getAttribute('data-stocklevel')}"></stock-label>`;

        
        desktopProductNode.parentElement.children[0].after(stockLevelDiv);
        

       /* Mobile View - add to list does not show for any products */

        // add stockLevelDiv to the mobile view
        let stockLevelDivMobile = document.createElement('div');
        stockLevelDivMobile.classList.add('stockLevelDiv', 'row', 'text-right');
        stockLevelDivMobile.innerHTML = `<stock-label data-stocklevel="${product.getAttribute('data-stocklevel')}"></stock-label>`;


        //add d-flex to the div which is going to contain the add to note icon and stock level, and the add to note icon to replace the Add Note link, otherwise just add the stock without the note
        if (mobileProductNode.parentElement.dataset.showNote == 'True') {
            mobileProductNode.classList.add('d-flex', 'align-items-center'); 
            mobileProductNode.innerHTML = `<add-to-note></add-to-note>`;
            mobileProductNode.innerHTML += stockLevelDivMobile.innerHTML;
        } else {
            mobileProductNode.parentElement.parentElement.children[0].after(stockLevelDivMobile);
        }
    });

    /* grid view */

    let gridProductList = document.querySelectorAll('.product-model.d-flex.flex-column');
    
    [...gridProductList].map((product) => {
        product.setAttribute('data-stocklevel', randomStockLevel());
        let showNote = product.children[4].getAttribute('data-show-note');

        // add stockLevelDiv to the mobile view
        let stockLevelDivGrid = document.createElement('div');
        stockLevelDivGrid.classList.add('stockLevelDiv', 'row', 'pl-2');
        stockLevelDivGrid.innerHTML = `<stock-label data-stocklevel="${product.getAttribute('data-stocklevel')}"></stock-label>`;

        let gridProductNode = product.children[4].children[1].children[0].children[0];
        gridProductNode.parentElement.classList.remove('pl-0');
        gridProductNode.parentElement.classList.add('pl-2');
        gridProductNode.children[1].children[0].innerHTML = `<add-to-list></add-to-list>`;
        
        if (showNote == 'True') {
        
        // clone the current addToNote because it is in its own row, so we want to clone it and then inject it in the same col of the add to list icon. 
         let addToNoteClone = product.children[4].children[2].children[0].children[0].cloneNode(true);
         product.children[4].children[2].children[0].children[0].innerHTML = `&nbsp;`;
 
         addToNoteClone.children[1].children[0].innerHTML = `<add-to-note class="ml-3"></add-to-note>`;
         gridProductNode.children[1].after(addToNoteClone);
       }

        product.children[4].children[0].after(stockLevelDivGrid);
    });