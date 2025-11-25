const blackBtn = document.querySelector('.black');
const whiteBtn = document.querySelector('.white');
const randomBtn = document.querySelector('.Random');

blackBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
});

whiteBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
});

randomBtn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
