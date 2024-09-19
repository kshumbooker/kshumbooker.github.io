let images = [
  {
    title: 'Skips Prawn Cocktail Crisps 45g £1.25 PMP',
    shotTypeId: 60,
    path: 'https://media.booker.co.uk/bbimages/1/26d1a4e8-6734-455d-abd2-c0a1d5aa8d3d.jpg'
  },
  {
    title: 'Walkers Crisps Ready Salted 32.5g',
    shotTypeId: 1,
    path: 'https://media.booker.co.uk/bbimages/1/7d5d4b2e-e4d1-4e0e-9ce7-197938e3b990.jpg'
  },
  {
    title: 'Walkers Crisps Salt & Vinegar 32.5g',
    shotTypeId: 3,
    path: 'https://media.booker.co.uk/bbimages/1/42f34b12-b75c-4611-895d-cfffe2bc7932.jpg'
  },
  {
    title: 'Walkers Wotsits Cheese Snacks Crisps £1.25 RRP PMP 60g',
    shotTypeId: 10,
    path: 'https://media.booker.co.uk/bbimages/1/1bc52403-f4e1-42a1-a873-d12c20f872d5.jpg'
  },
  {
    title: 'Nik Naks Nice N Spicy Crisps 75g, £1.25 PMP',
    shotTypeId: 31,
    path: 'https://media.booker.co.uk/bbimages/1/388701c1-f5a9-4d88-b162-74386daca7ea.jpg'
  },
  {
    title: 'Walkers Crisps Cheese & Onion 32.5g',
    shotTypeId: 4,
    path: 'https://media.booker.co.uk/bbimages/1/11212c08-1d10-48f0-9556-53fbe2c7b703.jpg'
  }
];

images.sort((a, b) => a.shotTypeId - b.shotTypeId);

images.map(image => {
  document.getElementById('multipleImagesPanel').innerHTML += `<a title="${image.title}" href="${image.path}" data-zoom-id="product" data-image="${image.path}">
    <img decoding="async" alt="${image.title}" srcset="${image.path}" src="${image.path}"></a>`;
});

const brandbankImages = document.querySelectorAll('.multipleImagesPanel > a');

  [...brandbankImages].map((b, i, arr) => {
    if (arr.length > 5 && i == 5 && window.innerWidth > 768) {
      b.classList.add('d-none');
    }
    b.addEventListener('click', () => {clickCarouselImg(b, i, arr)});
    b.addEventListener('touchstart', () => {clickCarouselImg(b, i, arr)});
  });


const multiImagesSliders = document.querySelectorAll('.multi-icon > a');

[...multiImagesSliders].map(m => {
  m.addEventListener('click', () => {slide(m)});
  m.addEventListener('touchstart', () => {slide(m)});
});

document.querySelector('.multi-icon.left').classList.add('disabled');

const clickCarouselImg = (b, index, brandbankImages) => {
  console.log(b);
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
  if (window.innerWidth > 768) {
    if (thumbs.length > 5 && index >= 4) {
      thumbs[0].classList.add('d-none');
      thumbs[5].classList.remove('d-none');
    } else {
      thumbs[5].classList.add('d-none');
      thumbs[0].classList.remove('d-none');
    }
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
