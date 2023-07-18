let btnShowAll = document.querySelector('.show-all')
let btnNewProducts = document.querySelector('.show-new')
let btnShowSales = document.querySelector('.show-sale')
let sortLinks = document.querySelectorAll('.products__groups .link')
let inputSearch = document.querySelector('.search-product')
let sortSelect = document.querySelector('select.sort-products')

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
    out.innerHTML = ''
    arrItems.map(item => {
        if (item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0) {
            //console.log(item.name)
            out.append(createProductItem(item))
        }
    })
}