let selected = document.querySelector('.documentSearchBtn');


var suggestion = {
  branch: '',
  getKeywordSuggestion: function (keywords) {
      $.ajax({
          url: 'https://jsonplaceholder.typicode.com/todos/1',
          type: 'GET',
          dataType: "json"
      }).done(function (data) {
          suggestion.append(data);

      }).fail(function () { suggestion.append(data); });
  },
  $resultSelector: $('.suggestions-result'),
  append: function (data) {
      suggestion.$resultSelector.empty();

      let searchProducts = [
        {
          midascode: 286188,
          description: 'HARIBO Balla Bites 140g',
          img: 'https://media.booker.co.uk/bbimages/1/05f057b7-13ed-4e32-a097-0ca9a4b3a323.jpg?date=20240909',
          volume: '12 x 140g',
          rrp: 1.25,
          por: 34.5,
          price: 8.19,
          url: 'https://www.booker.co.uk/products/search?keywords=286188'
        },
        {
          midascode: 286192,
          description: 'HARIBO Balla Stixx Strawberry Flavour 140g',
          img: 'https://media.booker.co.uk/bbimages/1/8e5432ca-e489-4f3d-8224-b00c8b4bdecb.jpg?date=20240909',
          volume: '12 x 154g',
          rrp: 1.25,
          por: 34.5,
          price: 8.19,
          url: 'https://www.booker.co.uk/products/search?keywords=286192'
        },
        {
          midascode: 286227,
          description: 'HARIBO Bubblegum Bottles Zing 160g',
          img: 'https://media.booker.co.uk/bbimages/1/7c70526b-b428-4f89-833a-6a8ad7a502bc.jpg?date=20240909',
          volume: '12 x 160g',
          rrp: 1.25,
          por: 34.5,
          price: 8.19,
          url: 'https://www.booker.co.uk/products/search?keywords=286227'
        },
        {
          midascode: 89443,
          description: 'HARIBO Chamallows 1kg',
          img: 'https://media.booker.co.uk/bbimages/1/02509c97-67c3-4da5-90de-0d129cb494c3.jpg?date=20240909',
          volume: '1kg',
          rrp: 0,
          por: 0,
          price: 5.29,
          url: 'https://www.booker.co.uk/products/search?keywords=89443'
        },
        {
          midascode: 284312,
          description: 'HARIBO Giant Cola 720g',
          img: 'https://media.booker.co.uk/bbimages/1/dd16a839-1a21-402e-9746-2da5016426c5.jpg?date=20240909',
          volume: '4 x 40pc',
          rrp: 0,
          por: 0,
          price: 16.29,
          url: 'https://www.booker.co.uk/products/search?keywords=284312'
        },
        {
          midascode: 294657,
          description: 'HARIBO Happy Cola 140g',
          img: 'https://media.booker.co.uk/bbimages/1/193e4b5d-c326-405b-90bd-11ae0a0f5db2.jpg?date=20240909',
          volume: '12 x 140g',
          rrp: 1.25,
          por: 27.3,
          price: 9.09,
          url: 'https://www.booker.co.uk/products/search?keywords=294657'
        },
        {
          midascode: 260494,
          description: 'HARIBO Starmix Fruit & Cola Flavour Jelly & Foam Sweets Sharing Bag 160g',
          img: 'https://media.booker.co.uk/bbimages/1/5ef52464-87b7-47a9-8a09-1d6695838a18.jpg?date=20240909',
          volume: '12 x 160g',
          rrp: 2.39,
          por: 49.2,
          price: 12.15,
          url: 'https://www.booker.co.uk/products/search?keywords=260494'
        },
        {
          midascode: 295906,
          description: 'HARIBO Tangfastics Fruit & Cola Flavour Fizzy Jelly Sweets Sharing Bag 154g',
          img: 'https://media.booker.co.uk/bbimages/1/e5805c6d-64cf-4124-a67e-d1b78086fad3.jpg?date=20240923',
          volume: '12 x 160g',
          rrp: 1.25,
          por: 27.3,
          price: 9.09,
          url: 'https://www.booker.co.uk/products/search?keywords=295906'
        },
        {
          midascode: 288953,
          description: 'HARIBO Sour Skeletons 140g',
          img: 'https://media.booker.co.uk/bbimages/1/2cb1c3da-41ba-4e6d-88ac-70230a7b46c3.jpg?date=20240923',
          volume: '12 x 160g',
          rrp: 1.25,
          por: 29.7,
          price: 8.79,
          url: 'https://www.booker.co.uk/products/search?keywords=288953'
        },
        {
          midascode: 295909,
          description: 'HARIBO Twin Snakes 154g',
          img: 'https://media.booker.co.uk/bbimages/1/7f81f2e4-e352-4592-969b-3d952258aad2.jpg?date=20240923',
          volume: '12 x 160g',
          rrp: 1.25,
          por: 27.3,
          price: 9.09,
          url: 'https://www.booker.co.uk/products/search?keywords=295909'
        },
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

      $.each(searchProducts, function (key, value) {
         $('.suggestions-result').append('<div class="keywordsuggestion row d-flex justify-content-center align-items-center"><div class="col-lg-12 col-xl-1 productImg"><img src="' + value.img + '"></div><div class="col-lg-12 col-xl-8 productDetails"><a class="searchUrl" href="/products/search?keywords=' + value.description + '">' + value.description + '</a><p class="volume">Case of ' + value.volume + '</p></div><div class="col-lg-12 col-xl-3 priceRrp"><p class="price">&pound;' + value.price + '</p><p class="rrp">RRP: &pound;' + value.rrp + '</p></div></div>');
      });

      $.each(searchDocuments, function (key, value) {
        $('.suggestions-result').append('<div class="keywordsuggestion row d-flex justify-content-center align-items-center"><div class="col-lg-12 col-xl-1">' + value.icon + '</div><div class="col-lg-12 col-xl-11"><a href="/documents/search?name=' + value.description + '">' + value.description + '</a><p class="category">' + value.category + '</p></div></div>');
     });

      $('.suggestions-result').css('display', 'block');
  }
}


$(document).ready(function () {
  var suggtimer = 0;
  $('.suggestion-keywords').on("input", function () {
      clearTimeout(suggtimer);
      var self = $(this);
      suggtimer = setTimeout(function () {
          suggestion.getKeywordSuggestion(self.val());
          
      }, 1000);
  });

  $('body').attr("class", $('#BodyCssClass').val());

  let searchInputs = document.querySelectorAll('#search-input input[type=text]');
[...searchInputs].map(search => {
  search.addEventListener('blur', () => {
    $('.suggestions-result').fadeOut();
  });
  
});

  
});