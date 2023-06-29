// Task 1

// 1: Потрібно створити масив обєктів. В одному обєкті повинно бути мінімум 3 ключа { name: "Sasha", age:22 }
// 2: Вивести на єкран

let out = document.querySelector('.products__list')
let btnShowAll = document.querySelector('.show-all')
let btnNewProducts = document.querySelector('.show-new')
let btnShowSales = document.querySelector('.show-sale')
let sortLinks = document.querySelectorAll('.products__groups .link')
let inputSearch = document.querySelector('.search-product')
let sortSelect = document.querySelector('select.sort-products')

let btnMiniCart = document.getElementById("btnMiniCart")
let wrapperMiniCart = document.getElementById("wrapperMiniCart")
let itemsCart = []

let itemsFavorite = []

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

function createCartItem(item, key) {
        let cartItem = document.createElement('div')
        cartItem.classList.add('cart-bag__item')

        let name = document.createElement('div')
        name.classList.add('cart-bag__name')
        name.innerText = `${item.name}`
        cartItem.append(name)

        let price = document.createElement('div')
        price.classList.add('cart-bag__price')
        price.innerText = `${item.price}`
        cartItem.append(price)

        let btnDelete = document.createElement('button')
        btnDelete.classList.add('btn-delete')
        btnDelete.innerText = 'X'
        cartItem.append(btnDelete)
        btnDelete.addEventListener('click', (e) => {
                itemsCart.splice(key, key + 1)
                console.log(key)
                console.log(itemsCart)
                e.target.parentNode.remove()
        })
        //wrapperMiniCart.getElementsByClassName('cart-bag__dropdown').append(cartItem)
        return cartItem
}

function createProductItem(item) {

        let productItem = document.createElement('li')
        productItem.classList.add('products__item')

        let imgCotainer = document.createElement('div')
        imgCotainer.classList.add('products__img')

        let img = document.createElement('img')
        img.src = `./img/${item.img}`
        imgCotainer.append(img)

        let productLinks = document.createElement('ul')
        productLinks.classList.add('products__links')

        let btnAddCartContainer = document.createElement('li')
        btnAddCartContainer.classList.add('products__links-item')
        let btnAddCart = document.createElement('a')
        btnAddCart.href = '#'
        btnAddCart.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.294 16.8745H8.24077C5.65655 16.8745 3.55412 14.7721 3.55412 12.1879V7.38404C3.55412 4.98174 2.35676 2.75812 0.351225 1.43578C-0.00894369 1.19832 -0.108379 0.71388 0.129078 0.353711C0.366535 -0.00649689 0.850939 -0.105971 1.21119 0.131564C2.35606 0.886427 3.28487 1.88203 3.94905 3.0283C4.09258 3.1891 5.24995 4.41583 7.14726 4.41583H16.142C18.596 4.36994 20.5168 6.83265 19.8752 9.20136L18.8397 13.3283C18.3159 15.4163 16.4466 16.8745 14.294 16.8745ZM4.91926 5.53676C5.04912 6.13669 5.11634 6.75528 5.11634 7.38404V12.1879C5.11634 13.9107 6.51796 15.3123 8.24077 15.3123H14.294C15.7291 15.3123 16.9752 14.3401 17.3245 12.9482L18.3599 8.8212C18.7412 7.41372 17.5997 5.95082 16.142 5.97804H7.14722C6.28913 5.97804 5.54224 5.79304 4.91926 5.53676ZM7.85021 19.0226C7.85021 18.4833 7.41307 18.0462 6.87383 18.0462C5.57828 18.0978 5.57942 19.9479 6.87383 19.9989C7.41307 19.9989 7.85021 19.5618 7.85021 19.0226ZM15.6222 19.0226C15.6222 18.4833 15.1851 18.0462 14.6459 18.0462C13.3503 18.0978 13.3514 19.9479 14.6459 19.9989C15.1851 19.9989 15.6222 19.5618 15.6222 19.0226ZM16.9231 8.32137C16.9231 7.88996 16.5734 7.54026 16.142 7.54026H7.45966C6.42329 7.5815 6.42407 9.06158 7.45966 9.10248H16.142C16.5734 9.10248 16.9231 8.75277 16.9231 8.32137Z" fill="#3D3D3D" /> </svg>`
        btnAddCartContainer.append(btnAddCart)
        productLinks.append(btnAddCartContainer)

        let btnAddFavoriteContainer = document.createElement('li')
        btnAddFavoriteContainer.classList.add('products__links-item')
        let btnAddFavorite = document.createElement('a')
        btnAddFavorite.href = '#'
        btnAddFavorite.innerHTML = `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873V17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532V1.26532Z" fill="#3D3D3D" /> </svg>`
        btnAddFavoriteContainer.append(btnAddFavorite)
        productLinks.append(btnAddFavoriteContainer)

        let link3Container = document.createElement('li')
        link3Container.classList.add('products__links-item')
        let link3 = document.createElement('a')
        link3.href = '#'
        link3.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.5656 16.0023C10.5704 19.1859 4.98549 18.3049 2.02729 14.6537C-0.827886 11.1285 -0.64932 6.04315 2.44811 2.82459C5.64856 -0.500733 10.6802 -0.94465 14.3277 1.78316C15.6345 2.76028 16.6104 4.00338 17.246 5.50808C17.8853 7.02152 18.0795 8.59614 17.8578 10.2201C17.6368 11.8366 16.9918 13.2769 15.9423 14.6212C16.0272 14.6768 16.1178 14.7167 16.1827 14.7816C17.3365 15.9305 18.4859 17.0836 19.6397 18.2325C19.9132 18.5047 20.0493 18.8219 19.9682 19.204C19.8071 19.9644 18.9018 20.2579 18.3211 19.7359C18.0489 19.4918 17.7985 19.2227 17.54 18.9642C16.5923 18.0171 15.6451 17.0693 14.6973 16.1221C14.658 16.0847 14.6168 16.0497 14.5656 16.0023ZM15.9529 8.98637C15.9629 5.12659 12.8468 2.00606 8.97825 2.00044C5.12035 1.99482 2.00669 5.09038 1.98983 8.94766C1.97297 12.8168 5.08289 15.9461 8.96326 15.9642C12.8055 15.9823 15.9429 12.8499 15.9529 8.98637Z" fill="#3D3D3D" /> </svg>`
        link3Container.append(link3)
        productLinks.append(link3Container)

        imgCotainer.append(productLinks)

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

        //let btnAddCart = document.createElement('button')

        // btnAddCart.classList.add('products__btn-add')
        // btnAddCart.innerText = `Add Cart`

        btnAddCart.addEventListener('click', () => {
                itemsCart.push(item)
                showProductsInCart(itemsCart)
        }, { 'once': true })

        btnAddFavorite.addEventListener('click', () => {
                itemsFavorite.push(item)
                console.log(itemsFavorite)
        }, { 'once': true })

        productItem.append(imgCotainer, title, price)


        return productItem
}
function toggleClassForList({ list, activeItem }, activeActive = 'link--active') {
        list.forEach(item => item.classList.remove(activeActive))
        activeItem.classList.add(activeActive)
}

shopItems.map(item => out.append(createProductItem(item)))


//sort function
function showProducts(items) {
        out.innerHTML = ''
        items.map(item => out.append(createProductItem(item)))
}

function showSalesProducts(items) {
        out.innerHTML = ''
        items.map(item => (item.sale) ? out.append(createProductItem(item)) : '');
}

function showNewProducts(items) {
        showProducts(items.filter(item => item.newArrival))
}

function sortProductsBySelect(select, items) {
        switch (select.value) {
                case 'top': showCheaper(items, false); break;
                case 'cheaper': showCheaper(items, true); break;
                case 'expansive': showCheaper(items, false); break;
                default: showProducts(items); break;
        }
}
function showCheaper(items, cheaper = true) {
        showProducts(items.sort((a, b) => (cheaper) ? a.price - b.price : b.price - a.price))
}
function search(e, arrItems) {
        out.innerHTML = ""
        arrItems.map(item => {

                // Кейсенсетів шоб не реагувало на великі і маленьки букви
                // виводити "Нічого не знайдено"
                if (item.name.indexOf(e.target.value) >= 0) {
                        console.log(item.name)
                        out.append(createProductItem(item))
                }

        })
}

//cart
function showProductsInCart(items) {
        let drop = wrapperMiniCart.querySelector('.cart-bag__dropdown')
        console.log(drop)
        drop.innerHTML = ''
        items.map((item, key) => drop.append(createCartItem(item, key)))
}






inputSearch.addEventListener('keydown', (e) => search(e, shopItems))

btnShowAll.addEventListener('click', (e) => {
        e.preventDefault()
        showProducts(shopItems)
        toggleClassForList({
                list: sortLinks,
                activeItem: e.target
        })

})
btnNewProducts.addEventListener('click', (e) => {
        e.preventDefault()
        showNewProducts(shopItems)
        toggleClassForList({
                list: sortLinks,
                activeItem: e.target
        })
})
btnShowSales.addEventListener('click', (e) => {
        e.preventDefault()
        showSalesProducts(shopItems)
        toggleClassForList({
                list: sortLinks,
                activeItem: e.target
        })
})
sortSelect.addEventListener('change', (event) => sortProductsBySelect(event.target, shopItems))