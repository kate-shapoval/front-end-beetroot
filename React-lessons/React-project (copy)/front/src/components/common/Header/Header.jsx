import { Link } from "react-router-dom";

import logo from '../../../assets/img/logo.svg'
import './header.scss'

export default function Header() {
    const nameBlock = 'header'
    const itemsNavigation = [
        { name: 'Catalog', href: '/' },
        { name: 'Delivery', href: '/delivery' },
        { name: 'Payment', href: '/payment' },
        { name: 'Contact Us', href: '/contactus' },
    ]

    return (
        <header className={nameBlock}>
            <div className={`container ${nameBlock}__row`}>
                <a className={`${nameBlock}__logo`} href="/">
                    <img src={logo} alt="logo" />
                </a>
                <nav className={`${nameBlock}__nav`}>
                    <ul className={`${nameBlock}__nav-container`}>
                        {
                            itemsNavigation.map((item, index) => (
                                <li key={index} className={`${nameBlock}__nav-item`}>
                                    <Link className={`link ${nameBlock}__nav-link`} to={item.href}>{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className={`${nameBlock}__btn-container`}>
                    <div id="wrapperSearch" className="search__wrapper">
                        <button id="btnSearch" className="btn btn-search">Search</button>
                        <div id="dropSearch" className="search__dropdown">
                            <input className="inp search-product" type="text" placeholder="Search" />
                        </div>
                    </div>

                    <div id="wrapperFavourite" className="favourite__wrapper">
                        <button id="btnFavourite" className="btn btn-favourite">Favourite <span
                            className="count">0</span></button>
                        <div id="dropFavourite" className="favourite__dropdown">No items</div>
                    </div>

                    <div id="wrapperMiniCart" className="cart-bag__wrapper">
                        <button id="btnMiniCart" className="btn btn-minicart">Cart <span className="count">0</span></button>
                        <div id="dropMiniCart" className="cart-bag__dropdown"> No items</div>
                    </div>

                    <button id="singIn" className="btn">Sign In</button>

                    <div className={`${nameBlock}__gamb`}>
                        <div className={`${nameBlock}__gamb-line ${nameBlock}__gamb-line--top`}></div>
                        <div className={`${nameBlock}__gamb-line ${nameBlock}__gamb-line--middle`}></div>
                        <div className={`${nameBlock}__gamb-line ${nameBlock}__gamb-line--bottom`}></div>
                    </div>
                </div>
            </div>
        </header>
    )
}