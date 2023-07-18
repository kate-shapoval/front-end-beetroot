function createItemFilter(objectItem) {
    const { item, count, typeFilter } = objectItem
    let filterItemContainer = document.createElement('li')
    filterItemContainer.classList.add('filter__item')
    let linkFilterItem = document.createElement('a')
    linkFilterItem.classList.add('link')
    linkFilterItem.href = '#'
    let textFilterItem = document.createElement('span')
    textFilterItem.style = 'text-transform: capitalize;'
    textFilterItem.innerHTML = `${item}`
    let quantitytFilterItem = document.createElement('span')
    quantitytFilterItem.classList.add('quantity')
    quantitytFilterItem.innerHTML = `${count}`
    filterItemContainer.append(linkFilterItem)
    linkFilterItem.append(textFilterItem)
    linkFilterItem.append(quantitytFilterItem)

    linkFilterItem.addEventListener('click', (e) => {
        e.preventDefault();
        showProducts(shopItems.filter(item2 => item2[`${typeFilter}`] == item))
    })

    return filterItemContainer
}
function addFilterCategory() {
    let listLinks = document.querySelector('.filter__categories .filter__list')
    let arr = []
    shopItems.map(item => arr.push(item.category))
    const option = new Set(arr)
    option.forEach(item => listLinks.append(createItemFilter({
        item: item,
        count: arr.filter((arrItem) => arrItem == item).length,
        typeFilter: 'category'
    })))

}
function addFilterSize() {
    let listLinks = document.querySelector('.filter__sizes .filter__list')
    let arr = []
    shopItems.map(item => arr.push(item.size))
    const option = new Set(arr)
    option.forEach(item => listLinks.append(createItemFilter({
        item: item,
        count: arr.filter((arrItem) => arrItem == item).length,
        typeFilter: 'size'
    })))
}