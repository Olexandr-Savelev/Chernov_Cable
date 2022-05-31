const newsBlock = document.querySelector('.news__cards')
const cardsArray = Array.from(newsBlock.querySelectorAll('.news__card'))

cardsArray.map(item => {
    item.addEventListener("click", (e) => {
        //Отменить дефолтное действие (переход по ссылке)
        e.preventDefault()

        newsBlock.prepend(item)
    })
})
