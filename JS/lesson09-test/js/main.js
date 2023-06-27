// Task 1

// 1: Потрібно створити масив обєктів. В одному обєкті повинно бути мінімум 3 ключа { name: "Sasha", age:22 }
// 2: Вивести на єкран

let out = document.querySelector('.products__list')
let btnShowAll = document.querySelector('.show-all')
let btnNewProducts = document.querySelector('.show-new')
let btnShowSales = document.querySelector('.show-sale')
let sortLinks = document.querySelectorAll('.products__groups .link')

let sortSelect = document.querySelector('select.sort-products')

let miniCart = []

const shopItems = [
        {
                sku: 'fl-1',
                name: 'Barberton Daisy1',
                category: 'House Plants',
                img: 'image1.png',
                price: 11.00,
                newArrival: true,
                sale: 20,
                favourite: false

        },
        {
                sku: 'fl-2',
                name: 'Barberton Daisy2',
                category: 'Trerrariums',
                img: 'image2.png',
                price: 11.00,
                newArrival: true,
                sale: 20,
                favourite: false

        },
        {
                sku: 'fl-3',
                name: 'Barberton Daisy3',
                category: 'House Plants',
                img: 'image3.png',
                price: 19.00,
                newArrival: false,
                sale: 20,
                favourite: false

        },
        {
                sku: 'fl-4',
                name: 'Barberton Daisy4',
                category: 'Trerrariums',
                img: 'image4.png',
                price: 19.00,
                newArrival: false,
                sale: null,
                favourite: false

        },
        {
                sku: 'fl-5',
                name: 'Barberton Daisy5',
                category: 'House Plants',
                img: 'image5.png',
                price: 119.00,
                newArrival: false,
                sale: null,
                favourite: false

        },
        {
                sku: 'fl-6',
                name: 'Barberton Daisy6',
                category: 'House Plants',
                img: 'image6.png',
                price: 1.00,
                newArrival: false,
                sale: null,
                favourite: false

        },

]

const productItemAdd = []


function createProductItem(item) {

        let productItem = document.createElement('li')
        productItem.classList.add('products__item')

        let imgCotainer = document.createElement('div')
        imgCotainer.classList.add('products__img')

        let img = document.createElement('img')
        img.src = `./img/${item.img}`
        imgCotainer.append(img)

        let title = document.createElement('h3')
        title.classList.add('products__item-title')
        let link = document.createElement('a')
        link.href = '#'
        link.classList.add('link')
        link.innerText = `${item.name}`
        title.append(link)

        let price = document.createElement('strong')
        price.classList.add('products__item-price')
        price.innerText = `${item.price}`

        let btnAddCart = document.createElement('button')

        btnAddCart.classList.add('products__btn-add')
        btnAddCart.innerText = `Add Cart`

        btnAddCart.addEventListener('click', () => {
                miniCart.push(item)
                //console.log(miniCart)
        }, { 'once': true })

        productItem.append(btnAddCart, imgCotainer, title, price)


        return productItem
}
function toggleClassForList(list, activeItem, activeActive) {
        list.forEach(item => item.classList.remove('link--active'))
        activeItem.classList.add('link--active')
}

shopItems.map(item => out.append(createProductItem(item)))


//sort function
function showAllProducts(items) {
        out.innerHTML = ''
        items.map(item => out.append(createProductItem(item)))
}

function showSalesProducts(items) {
        out.innerHTML = ''
        items.map(item => (item.sale) ? out.append(createProductItem(item)) : '');
}

function showNewProducts(items) {
        showAllProducts(items.filter(item => item.newArrival))
}

function sortProductsBySelect(select, items) {
        switch (select.value) {
                case 'top': showCheaper(items, false); break;
                case 'cheaper': showCheaper(items, true); break;
                case 'expansive': showCheaper(items, false); break;
                default: showAllProducts(items); break;
        }
}
function showCheaper(items, cheaper = true) {
        showAllProducts(items.sort((a, b) => (cheaper) ? a.price - b.price : b.price - a.price))
}










btnShowAll.addEventListener('click', (e) => {
        e.preventDefault()
        showAllProducts(shopItems)
        toggleClassForList(sortLinks, btnShowAll, 'link--active')

})
btnNewProducts.addEventListener('click', (e) => {
        e.preventDefault()
        showNewProducts(shopItems)
        toggleClassForList(sortLinks, btnNewProducts, 'link--active')
})
btnShowSales.addEventListener('click', (e) => {
        e.preventDefault()
        showSalesProducts(shopItems)
        toggleClassForList(sortLinks, btnShowSales, 'link--active')
})
sortSelect.addEventListener('change', (event) => sortProductsBySelect(event.target, shopItems))