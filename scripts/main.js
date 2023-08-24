const boxEl = document.querySelector('.box');
const allBoxEl = document.querySelectorAll('.box');
const changeActiveBlockButton = document.querySelector('.btn-change-active-block');
const changeBg = document.querySelector('.btn-change-background');
const activeEl = document.querySelector('.active');

// changeBg.addEventListener('click', () => {
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);

//     activeEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// });

changeActiveBlockButton.addEventListener('click', () => {
    const firstBox = allBoxEl[0];
    const secondBox = allBoxEl[1];

    if (!firstBox.classList.contains('active')) {
        firstBox.classList.add('active');
        secondBox.classList.remove('active');

        changeBg.addEventListener('click', () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            activeEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    } else if (!secondBox.classList.contains('active')) {
        secondBox.classList.add('active');
        firstBox.classList.remove('active');

        changeBg.addEventListener('click', () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            activeEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    }
})