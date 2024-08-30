
    let images = [
      {
        title: 'Walkers Crisps Ready Salted 32.5g',
        shotTypeId: 60,
        path: 'https://media.booker.co.uk/bbimages/1/e2c1ba87-1b10-461b-bb9e-98c5e031e7f0.jpg?date=20240806'
      },
      {
        title: 'Walkers Crisps Ready Salted 32.5g',
        shotTypeId: 1,
        path: 'https://media.booker.co.uk/bbimages/1/7d5d4b2e-e4d1-4e0e-9ce7-197938e3b990.jpg?date=20240808'
      },
      {
        title: 'Walkers Crisps Ready Salted 32.5g',
        shotTypeId: 3,
        path: 'https://media.booker.co.uk/bbimages/1/d8996462-83ac-4b81-b1a6-7a51ae69a2df.jpg?date=20240808'
      },
      {
        title: 'Walkers Crisps Ready Salted 32.5g',
        shotTypeId: 10,
        path: 'https://media.booker.co.uk/bbimages/1/f2b51c83-aab3-4f8a-8518-4da47d8901a0.jpg?date=20240807'
      },
      {
        title: 'Walkers Crisps Ready Salted 32.5g',
        shotTypeId: 31,
        path: 'https://media.booker.co.uk/bbimages/1/2f2b32f2-1059-4d37-9bca-eaca5f0cafc7.jpg?date=20240808'
      },
      {
        title: 'Walkers Crisps Ready Salted 32.5g',
        shotTypeId: 4,
        path: 'https://media.booker.co.uk/bbimages/1/17f8c7d1-291f-4eaf-9df8-08819467efbd.jpg?date=20240808'
      }
    ];

    images.sort((a, b) => a.shotTypeId - b.shotTypeId);
    
    images.map(image => {
      document.getElementById('multipleImagesPanel').innerHTML += `<a title="${image.title}" href="${image.path}" data-zoom-id="product" data-image="${image.path}">
        <img decoding="async" alt="${image.title}" srcset="${image.path}" src="${image.path}"></a>`;
    });

    const brandbankImages = document.querySelectorAll('.multipleImagesPanel > a');


    [...brandbankImages].map((b, i, arr) => {
      if (arr.length > 5 && i == 5) {
        b.classList.add('d-none');
      }
       b.addEventListener('click', () => {clickCarouselImg(b, i, arr)});
        b.addEventListener('touchstart', () => {clickCarouselImg(b, i, arr)});
    });

    const multiImagesSliders = document.querySelectorAll('.multi-icon > a');

    [...multiImagesSliders].map(m => {
      m.addEventListener('click', () => {slide(m)});
    });

    document.querySelector('.multi-icon.left').classList.add('disabled');

    const clickCarouselImg = (b, index, brandbankImages) => {
     activeSliders(index, brandbankImages);
    }
    
    const slide = (s) => {
      let direction = s.getAttribute('data-slide');
      let mzThumbSelected = document.querySelectorAll('.mz-thumb');
      let magicZoomImg = document.querySelector('.MagicZoom'); 
      let currentImage = document.querySelector('.mz-figure > img');
      let mzLensImg = document.querySelector('.mz-lens > img');
      let mzZoomWindowImg = document.querySelector('.mz-zoom-window > img');
      let activeKey;

      [...mzThumbSelected].map((mz, index) => {
        if (mz.classList.contains('mz-thumb-selected')) {
          mz.classList.remove('mz-thumb-selected');
          
          activeKey = (direction == 'next' && index < mzThumbSelected.length) ? index + 1 : (direction == 'prev' && index > 0) ? index - 1 : false;     
        }

        activeSliders(activeKey, mzThumbSelected);
      });     

      
      mzThumbSelected[activeKey].classList.add('mz-thumb-selected');

      let currentImgUrl = mzThumbSelected[activeKey].href;
      magicZoomImg.href = currentImage.src = mzLensImg.src = mzZoomWindowImg.src = currentImgUrl;
    }

    const activeSliders = (index, thumbs) => {
      if (thumbs.length > 5 && index >= 4) {
        thumbs[0].classList.add('d-none');
        thumbs[5].classList.remove('d-none');
      } else {
        thumbs[5].classList.add('d-none');
        thumbs[0].classList.remove('d-none');
      }


      if (index == 0) {
        document.querySelector('.multi-icon.left').classList.add('disabled');
      } else if (index == thumbs.length - 1) {
        document.querySelector('.multi-icon.right').classList.add('disabled');
      } else {
        document.querySelector('.multi-icon.left').classList.remove('disabled');
        document.querySelector('.multi-icon.right').classList.remove('disabled');
      }
    }

