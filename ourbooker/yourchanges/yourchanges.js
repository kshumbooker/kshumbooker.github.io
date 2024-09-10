let cancelChanges = document.querySelectorAll('.cancelChange');
let viewChanges = document.querySelectorAll('.viewChange');
let futureChanges = document.querySelectorAll('.futureChange');
[...cancelChanges].map(cancel => cancel.addEventListener('click', () => cancelViewChange()));
[...viewChanges].map(view => view.addEventListener('click', () => openViewChange()));

let colleague = {
  'id': 12345,
  'first-name': 'John',
  'last-name': 'Pickerton-Smith',
  'gender': 'Male',
  'address': '63 Leamington Road, Swinton, Manchester, Lancashire, M27 4PF',
  'email-address': 'jpickerton-smith@gmail.com',
  'phone-number': '01933371000',
  'preferred-name-reviewed': 'Sir Keir',
  'address-reviewed': '10 Downing St, London, Greater London, SW1A 2AA'
}

const truncateData = (data, width) => {
 
  let length = ((width > 576 && width < 992) || width > 992) ? 20 : 40;

  return (data.length > length) ? data.slice(0, length) + '...' : data;
}


const cancelViewChange = () => {
  document.querySelector('.cancelChangeModal').classList.remove('d-none');
}

const closeViewChange = () => {
  document.querySelector('.viewChangeModal').classList.add('d-none');
}

const openViewChange = () => {
  document.querySelector('.viewChangeModal').classList.remove('d-none');
}

const fieldSizePageWidth = () => {
  let width = window.innerWidth;
  let dataFields = document.querySelectorAll('.dataFields');
  [...dataFields].map(data => {
    Object.keys(colleague).map(key => {
      if (data.classList.contains(key)) {
        data.innerHTML = truncateData(colleague[key], width);
      }
    });
  });  
}

fieldSizePageWidth();

window.onresize = () => {
 fieldSizePageWidth();
}
