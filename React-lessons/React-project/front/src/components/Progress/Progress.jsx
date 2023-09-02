import { Link } from "react-router-dom";

import './progress.scss'
import img1 from '../../assets/img/img-progress/img1.png'
import img2 from '../../assets/img/img-progress/img2.png'
import img3 from '../../assets/img/img-progress/img3.png'
import img4 from '../../assets/img/img-progress/img4.png'
import img5 from '../../assets/img/img-progress/img5.png'
import img6 from '../../assets/img/img-progress/img6.png'
import img7 from '../../assets/img/img-progress/img7.png'
import img8 from '../../assets/img/img-progress/img8.png'

export default function Progress() {
    const nameBlock = 'progress'
    return (
        <section className={nameBlock}>
            <div className={`${nameBlock}__container container`}>
                <h2 className={`${nameBlock}__title`}><span className="mark">Хід робіт</span> з проекту</h2>
                <div className={`${nameBlock}__list`}>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__item-title`}>
                            <span className="count">01</span>
                            <span>Аналізуємо майбутній проект</span>
                        </h3>
                        <img src={img1} alt="Аналізуємо майбутній проект" />
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__item-title`}>
                            <span className="count">02</span>
                            <span>Пишемотехнічне завдання</span>
                        </h3>
                        <img src={img2} alt="Пишемотехнічне завдання" />
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__item-title`}>
                            <span className="count">03</span>
                            <span>Створюємо прототип</span>
                        </h3>
                        <img src={img3} alt="Створюємо прототип" />
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__item-title`}>
                            <span className="count">04</span>
                            <span>Pозробляємо дизайн</span>
                        </h3>
                        <img src={img4} alt="Pозробляємо дизайн" />
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__item-title`}>
                            <span className="count">05</span>
                            <span>Адаптивная верстка</span>
                        </h3>
                        <img src={img5} alt="Адаптивная верстка" />
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__item-title`}>
                            <span className="count">06</span>
                            <span>Програмне налаштування</span>
                        </h3>
                        <img src={img6} alt="Програмне налаштування" />
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__item-title`}>
                            <span className="count">07</span>
                            <span>Наповнення контентом</span>
                        </h3>
                        <img src={img7} alt="Наповнення контентом" />
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__item-title`}>
                            <span className="count">08</span>
                            <span>Тестування та запуск</span>
                        </h3>
                        <img src={img8} alt="Тестування та запуск" />
                    </div>

                </div>
                <div className="btn-container">
                    <Link className="btn" to='/prices'>Розрахувати вартість</Link>
                </div>
            </div>
        </section>
    )
}