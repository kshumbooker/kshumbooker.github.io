
    let images = [
      {
        shotTypeId: 60,
        path: 'https://media.booker.co.uk/bbimages/1/e2c1ba87-1b10-461b-bb9e-98c5e031e7f0.jpg?date=20240806'
      },
    {
        shotTypeId: 1,
            path: 'https://media.booker.co.uk/bbimages/1/7d5d4b2e-e4d1-4e0e-9ce7-197938e3b990.jpg?date=20240808'
    },
    {
        shotTypeId: 3,
            path: 'https://media.booker.co.uk/bbimages/1/d8996462-83ac-4b81-b1a6-7a51ae69a2df.jpg?date=20240808'
          },
          {
            shotTypeId: 10,
            path: 'https://media.booker.co.uk/bbimages/1/f2b51c83-aab3-4f8a-8518-4da47d8901a0.jpg?date=20240807'
          },
          {
            shotTypeId: 31,
            path: 'https://media.booker.co.uk/bbimages/1/2f2b32f2-1059-4d37-9bca-eaca5f0cafc7.jpg?date=20240808'
          },
          {
            shotTypeId: 4,
            path: 'https://media.booker.co.uk/bbimages/1/17f8c7d1-291f-4eaf-9df8-08819467efbd.jpg?date=20240808'
          }
        ];

        images.sort((a, b) => a.shotTypeId - b.shotTypeId);
    
        images.map(image => {
            document.getElementById('multipleImagesPanel').innerHTML += `<a title="" href="${image.path}" data-zoom-id="product" data-image="${image.path}">
               <img decoding="async" alt="" srcset="${image.path}" src="${image.path}" class="brandbankMultiImages">    
            </a>`;
            document.getElementById('multipleImagesPanelMobile').innerHTML += `<a title="" href="${image.path}" data-zoom-id="product" data-image="${image.path}">
               <img decoding="async" alt="" srcset="${image.path}" src="${image.path}" class="brandbankMultiImages">    
            </a>`;                  
        });

    
        const brandbankImages = document.querySelectorAll('.brandbankMultiImages');
        [...brandbankImages].map(b => b.addEventListener('click', () => {hoverImage(b)}));
    
        const hoverImage = (image) => {
           let magicZoomImg = document.querySelector('.MagicZoom > href'); 
           let currentImage = document.querySelector('.mz-figure.mz-hover-zoom.mz-no-expand.mz-ready > img');
           let mzLensImg = document.querySelectorAll('.mz-lens > img');
           magicZoomImg = image.src;
           currentImage.src = image.src;
           [...mzLensImg].map(m => m.src = image.src);
        }
