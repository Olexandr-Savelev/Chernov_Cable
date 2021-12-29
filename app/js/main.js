const newsBlock = document.getElementById('news');
// const newsCard = newsBlock.querySelector('.news__card');
const cardsArray = Array.from(document.querySelectorAll('.news__card'))

cardsArray.map(item => {
    console.log(item)
    item.addEventListener("click", (e) => {
        //Отменить дефолтное действие (переход по ссылке)
        e.preventDefault();
        //Проходит по картам массива и убирает класс _big если он есть 
        deleteClass(cardsArray);
        //Добавляет класс кликнутому элементу
        item.classList.add('_big')
    })
})

const deleteClass = (array) => {
    array.map((item) => {
        item.classList.remove('_big')
    })
}