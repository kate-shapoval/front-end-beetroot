import { Link } from "react-router-dom";

import mainImg from '../../assets/img/main-img.png'
// import './header.scss'

export default function Hero() {
    const nameBlock = 'hero'

    return (
        <section className={nameBlock}>
            <div className={`${nameBlock}__container container slider`}>
                <div className="slider__item">
                    <h2 className="slider__title">Розробка <span className="mark">Сайтів</span> для бізнесу</h2>
                    <img className="slider__img" src={mainImg} alt=" hero" width="518" />
                    <p>Проектування, розробка, тестування та підтримка інтернет-магазинів, веб-сервісів, додатків, продавців та корпоративних сайтів</p>
                    <div className="btn-container">
                        <Link className="btn" to='/prices'>Розрахувати вартість</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}