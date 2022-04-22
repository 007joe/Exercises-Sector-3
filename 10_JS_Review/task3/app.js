
document.addEventListener('DOMContentLoaded', () => {
   
const button = document.querySelector('.btn');
button.addEventListener('click', showTime);

});

function showTime() {
    document.querySelector('#time').innerText = Date();

}

