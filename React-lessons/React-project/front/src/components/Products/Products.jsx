import { Link } from "react-router-dom";

import './products.scss'

export default function Products() {
    const nameBlock = 'products'
    return (
        <section className={nameBlock}>
            <div className={`${nameBlock}__container container`}>
                <div className={`${nameBlock}__list`}>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__title`}>Інтернет магазини</h3>
                        <p>Дозволяють збільшити кількість покупців, запропонувавши їм можливість дистанційного замовлення та доставки товарів за місцем призначення.</p>
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__title`}>Сайти компаній</h3>
                        <p>Представляють компанію в мережі інтернет, формують імідж серед потенційних партнерів, знайомлять із послугами та товарами компанії.</p>
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__title`}>Landing Page</h3>
                        <p>Розробляється для продажу будь-якої однієї послуги або невеликої кількості товарів для цільової аудиторії.</p>
                    </div>
                </div>
                <div className="btn-container">
                    <Link className="btn" to='/prices'>Розрахувати вартість</Link>
                </div>
            </div>
        </section>
    )
}