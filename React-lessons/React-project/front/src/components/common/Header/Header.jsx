import { Link } from "react-router-dom";

import logo from '../../../assets/img/logo.svg'
import './header.scss'

export default function Header() {
    const nameBlock = 'header'
    const itemsNavigation = [
        { name: 'Головна', href: '/' },
        { name: 'Розрахунок ціни', href: '/prices' },
        { name: 'Портфоліо', href: '/portfolio' },
        { name: 'Контакти', href: '/contactus' },
    ]


    function showHideMenu(e) {
        document.querySelector('.header__gamb').classList.toggle('active')
        document.querySelector('.header__nav').classList.toggle('active')
    }
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
                <div className={`${nameBlock}__gamb`} onClick={(e) => showHideMenu(e)}>
                    <div className={`${nameBlock}__gamb-line ${nameBlock}__gamb-line--top`}></div>
                    <div className={`${nameBlock}__gamb-line ${nameBlock}__gamb-line--middle`}></div>
                    <div className={`${nameBlock}__gamb-line ${nameBlock}__gamb-line--bottom`}></div>
                </div>
            </div>
        </header>
    )
}