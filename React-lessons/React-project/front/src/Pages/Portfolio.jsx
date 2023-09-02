
import img1 from '../assets/img/img-portfolio/img1.jpg'
import img2 from '../assets/img/img-portfolio/img2.png'

export default function Portfolio() {
    const nameBlock = 'portfolio'
    return (
        <section className={nameBlock}>
            <div className={`${nameBlock}__container container`}>
                <h1 className={`${nameBlock}__title`}>Портфоліо <span className="mark">проектів</span></h1>
                <div className={`${nameBlock}__list`}>
                    <div className={`${nameBlock}__item`}>
                        <img src={img1} alt="Репетитор з математики" />
                        <div className="ditails">
                            <h3 className={`${nameBlock}__item-title`}>
                                <span>Репетитор з математики</span>
                            </h3>
                            <p>Landing page для репетитора математики, який інформує відвідувача про кваліфікацію вчителя та про послуги, які він надає</p>
                        </div>
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <img src={img2} alt="Магазин рослин" />
                        <div className="ditails">
                            <h3 className={`${nameBlock}__item-title`}>
                                <span>Магазин рослин</span>
                            </h3>
                            <p>Інтернет-магазин з продажу рослин. На ньому можна легко знайти необхідну квітку і замовити її доставку додому чи офісу</p>
                        </div>
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <img src={img2} alt="Магазин рослин" />
                        <div className="ditails">
                            <h3 className={`${nameBlock}__item-title`}>
                                <span>Магазин рослин</span>
                            </h3>
                            <p>Інтернет-магазин з продажу рослин. На ньому можна легко знайти необхідну квітку і замовити її доставку додому чи офісу</p>
                        </div>
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <img src={img2} alt="Магазин рослин" />
                        <div className="ditails">
                            <h3 className={`${nameBlock}__item-title`}>
                                <span>Магазин рослин</span>
                            </h3>
                            <p>Інтернет-магазин з продажу рослин. На ньому можна легко знайти необхідну квітку і замовити її доставку додому чи офісу</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}