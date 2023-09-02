import './contact.scss'

export default function ContactUs() {
    const nameBlock = 'contact'
    function openModal() {
        document.querySelector(".modal").classList.add("modal--visible");
    }
    function closeModal() {
        document.querySelector(".modal").classList.remove("modal--visible");
    }
    return (
        <section className={nameBlock}>
            <div className={`${nameBlock}__container container`}>
                <h1 className={`${nameBlock}__title`}>Давайте <span className='mark'>обговоримо</span> Ваш проект </h1>
                <p>Поясніть нам свій проект, і ми зв'яжемося з Вами відразу ж як зробимо розрахунок.</p>
                <div className={`${nameBlock}__list`}>
                    <div className="line line--center">
                        <div className="field">
                            <input type="text" placeholder="Ім'я" />
                        </div>
                    </div>
                    <div className="line line--center">
                        <div className="field">
                            <input type="text" placeholder='Телефон' />
                        </div>
                    </div>
                    <div className="line line--center">
                        <div className="field">
                            <input type="text" placeholder='Email' />
                        </div>
                    </div>
                    <div className="line line--center line--text">
                        <div className="field">
                            <textarea type="text" placeholder='Опишіть коротко, що Вам потрібне'></textarea>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button className="btn" onClick={() => openModal()}>Відправити повідомлення</button>
                    </div>
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