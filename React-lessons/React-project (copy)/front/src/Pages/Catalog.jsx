// import { shopItems } from '../data/shopItems.js'
import { Link } from "react-router-dom";
import ProductItem from '../components/ProductItem.jsx';
import CategoriesFilter from '../components/filters/CategoriesFilter.jsx';
// let currentItems = [...shopItems];
import { shopItems } from '../data/shopItems.js'
let currentItems = [...shopItems];
export default function Catalog(props) {
    let arr = []
    props.shopItems.map(item => arr.push(item.category))
    const option = new Set(arr)
    const categories = []
    option.forEach((item, index) => categories.push(item))
    let arr2 = []
    props.shopItems.map(item => arr2.push(item.size))
    const option2 = new Set(arr2)
    const size = []
    option2.forEach((item, index) => size.push(item))
    function filterCategory(category) {
        currentItems = props.shopItems.filter(item2 => item2.category == category.target.innerText)
        console.log(currentItems)
    }
    function filterSize(size) {
        props.currentItems = props.shopItems.filter(item2 => item2.size == size.target.innerText)
        console.log(props.currentItems)
    }
    return (
        <section className="products">
            <div className="container products__container">
                <div className="filter">
                    <div className="filter__block">
                        <h3 className="filter__title">Categories</h3>
                        <ul className="filter__list">
                            {
                                categories.map((item, index) => (
                                    <li key={index} className="filter__item" >
                                        <Link className="link" to="/" onClick={(item) => filterCategory(item)}>
                                            <span className="category__name">{item}</span>
                                            <span className="quantity">{arr.filter((arrItem) => arrItem == item).length}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div >

                    <div className="filter__block">
                        <h3 className="filter__title">Size</h3>
                        <ul className="filter__list">
                            {
                                size.map((item, index) => (
                                    <li key={index} className="filter__item" >
                                        <Link className="link" to="/" onClick={(item) => filterSize(item)}>
                                            <span className="category__name">{item}</span>
                                            <span className="quantity">{arr2.filter((arrItem) => arrItem == item).length}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="block-sale">
                        <img src="@@webRoot/img/super-sale.jpg" alt="" width="100%" />
                    </div>
                </div>
                <div className="products__content">
                    <div className="top-block">
                        <ul className="products__groups">
                            <li className="products__item"><a href="#" className="link link--active">All Plants</a></li>
                            <li className="products__item"><a href="#" className="link">New Arrivals</a></li>
                            <li className="products__item"><a href="#" className="link">Sale</a></li>
                        </ul>
                        <div className="products__sort">
                            <span>Short by:</span>
                            <select className="select">
                                <option selected value="default">Default sorting</option>
                                <option value="top">top</option>
                            </select>
                        </div>
                    </div>
                    <ul className="products__list">
                        {console.log(`some ${currentItems}`)}
                        {
                            currentItems.map((itemProduct, index) => (
                                <ProductItem item={itemProduct} key={index} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}