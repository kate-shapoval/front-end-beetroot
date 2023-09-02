import { Link } from "react-router-dom";

import mainImg from '../../assets/img/main-img.png'
// import './header.scss'

export default function Hero() {
    const nameBlock = 'hero'
    const itemsNavigation = [
        { name: 'Catalog', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Delivery', href: '/delivery' },
        { name: 'Payment', href: '/payment' },
        { name: 'Contact Us', href: '/contactus' },
    ]

    return (
        <section className={nameBlock}>
            <div className="`${nameBlock}__container container slider`">
                <div className="slider__item">
                    <span className="slider__welcome">Welcome to GreenShop</span>
                    <h2 className="slider__title">Let’s Make a Better <span className="mark">Planet</span></h2>
                    <img className="slider__img" src={mainImg} alt=" hero" width="518" />
                    <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to
                        create an unique Urban Jungle. Order your favorite plants!</p>
                    <button className="btn">SHOP NOW</button>
                </div>
            </div>
        </section>
    )
}