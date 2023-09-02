import './prices.scss'

export default function Prices() {
    const nameBlock = 'prices'
    function openModal() {
        document.querySelector(".modal").classList.add("modal--visible");
    }
    function closeModal() {
        document.querySelector(".modal").classList.remove("modal--visible");
    }
    return (
        <section className={nameBlock}>
            <div className={`${nameBlock}__container container`}>
                <h1 className={`${nameBlock}__title`}>Розрахувати вартість <span className='mark'>сайту</span></h1>
                <div className={`${nameBlock}__list`}>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__title`}>Навіщо Вам потрібний сайт?</h3>
                        <div className="columns">
                            <div className="column">
                                <div className="line">
                                    <input type="checkbox" name="check1" id="check1" />
                                    <label htmlFor="check1">Просування будь-якого продукту або бренду</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check2" id="check2" />
                                    <label htmlFor="check2"> Створення сприятливого іміджу компанії</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check3" id="check3" />
                                    <label htmlFor="check3"> Реклама товару чи послуги</label>
                                </div>
                            </div>
                            <div className="column">
                                <div className="line">
                                    <input type="checkbox" name="check4" id="check4" />
                                    <label htmlFor="check4">Взаємодія з людьми (відвідувачі, клієнти, партнери)</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check5" id="check5" />
                                    <label htmlFor="check5">Прямий продаж у мережі</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check6" id="check6" />
                                    <label htmlFor="check6"> Створення будь-якого сервісу в мережі</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__title`}>Яка інформація має бути на сайті?</h3>
                        <div className="columns">
                            <div className="column">
                                <div className="line">
                                    <input type="checkbox" name="check21" id="check21" />
                                    <label htmlFor="check21">Інформація про послуги компанії</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check22" id="check22" />
                                    <label htmlFor="check22">Карточки товара</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check23" id="check23" />
                                    <label htmlFor="check23"> Форма зворотного зв'язку</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check24" id="check24" />
                                    <label htmlFor="check24">Наша команда</label>
                                </div>
                            </div>
                            <div className="column">
                                <div className="line">
                                    <input type="checkbox" name="check25" id="check25" />
                                    <label htmlFor="check25">Інформація про компанію та контакти</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check26" id="check26" />
                                    <label htmlFor="check26">Новини компанії</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check27" id="check27" />
                                    <label htmlFor="check27">Прайс-лист</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check28" id="check28" />
                                    <label htmlFor="check28"> Інше</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__title`}>Які дії має зробити відвідувач на сайті?</h3>
                        <div className="columns">
                            <div className="column">
                                <div className="line">
                                    <input type="checkbox" name="check31" id="check31" />
                                    <label htmlFor="check31">Користувач повинен написати Вам повідомлення</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check32" id="check32" />
                                    <label htmlFor="check32">Замовити товар у магазині</label>
                                </div>
                            </div>
                            <div className="column">
                                <div className="line">
                                    <input type="checkbox" name="check33" id="check33" />
                                    <label htmlFor="check33">Замовити дзвінок із сайту</label>
                                </div>
                                <div className="line">
                                    <input type="checkbox" name="check34" id="check34" />
                                    <label htmlFor="check34">Залишити заявку через форму зворотнього зв'язку</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${nameBlock}__item`}>
                        <h3 className={`${nameBlock}__title`}>Впишіть свій телефон, на який можна надіслати інформацію по telegram</h3>

                        <div className="line line--center">
                            <div className="field">
                                <input type="text" placeholder='Телефон' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="btn-container">
                    <button className="btn" onClick={() => openModal()}>Розрахувати вартість</button>
                </div>
            </div>
            <div class="modal">
                <div class="modal__content">
                    <div class="modal__close" onClick={() => closeModal()}>X</div>
                    <p>Дякуємо, дані успішно відправлені, наш менеджер зв'яжеться з Вами протягом 30 хвилин</p>
                </div>
            </div>
        </section>
    )
}