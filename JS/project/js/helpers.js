function toggleClassForList({ list, activeItem }, activeActive = 'link--active') {
    list.forEach(item => item.classList.remove(activeActive))
    activeItem.classList.add(activeActive)
}