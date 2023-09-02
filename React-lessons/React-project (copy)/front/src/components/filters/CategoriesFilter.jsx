//import { Link } from "react-router-dom";

export default function CategoriesFilter({ shopItems, filterCategory }) {
    let listLinks = document.querySelector('.filter__categories .filter__list')
    let arr = []
    shopItems.map(item => arr.push(item.category))
    const option = new Set(arr)
    const categories = []
    option.forEach((item, index) => categories.push(item))

    return (
        <div className="filter__block">
            <h3 className="filter__title">Categories</h3>
            <ul className="filter__list">
                {
                    categories.map((item, index) => (
                        <li key={index} className="filter__item" >
                            <div className="link" onClick={(item) => filterCategory(item)}>
                                <span className="category__name">{item}</span>
                                <span className="quantity">{arr.filter((arrItem) => arrItem == item).length}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div >

    )
}