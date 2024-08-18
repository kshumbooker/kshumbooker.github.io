let cancelChanges = document.querySelectorAll('.cancelChange');
let viewChanges = document.querySelectorAll('.viewChange');
let futureChanges = document.querySelectorAll('.futureChange');
[...cancelChanges].map(cancel => cancel.addEventListener('click', () => cancelViewChange()));
[...viewChanges].map(view => view.addEventListener('click', () => openViewChange()));
[...futureChanges].map(future => future.addEventListener('mouseover', () => hoverFutureChange(future)));


const cancelViewChange = () => {
  document.querySelector('.cancelChangeModal').classList.remove('d-none');
}

const closeViewChange = () => {
  document.querySelector('.viewChangeModal').classList.add('d-none');
}

const openViewChange = () => {
  document.querySelector('.viewChangeModal').classList.remove('d-none');
}

const hoverFutureChange = (future) => {
   
}