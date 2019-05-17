const btnModal = document.getElementById('btn-cls');
const modalBlock = document.querySelector('.modal-block');
const backdropBlock = document.querySelector('.backdrop-block');

btnModal.onclick = function () {
    modalBlock.style.display = 'flex';
    backdropBlock.style.display = 'block';
};

backdropBlock.onclick = function () {
    modalBlock.style.display = 'none';
    backdropBlock.style.display = 'none';
};