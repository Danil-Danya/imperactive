<template>
    <section class="revievs">
        <div class="revievs__container">
            <div class="container">
                <div class="revievs__content">
                    <h2 class="revievs__title title" id="revievs">Наши отзывы</h2>
                    <p class="revievs__text">Мы гордимся отзывами наших клиентов и ценим их доверие. Для нас важно, чтобы каждый клиент чувствовал себя уверенно и комфортно в сотрудничестве с нами. Мы стремимся предоставить высокий уровень профессионализма и надежности во всех наших услугах. </p>
                </div>
                <div class="revievs__container-all">
                    <div class="revievs__container-slider">
                        <div class="revievs__slider slider">
                            <div class="revievs__slider-line slider-line">
                                <div class="revievs__item slider__item">
                                    <div class="revievs__item-container">
                                        <div class="revievs__item-left">
                                            <img src="@/assets/images/revievs/photos/photo.png" alt="Photo" class="revievs__img">
                                        </div>
                                        <div class="revievs__item-right">
                                            <h3 class="revievs__item-title">Алексей Смиренко</h3>
                                            <p class="revievs__item-person">Директор компании OOO LOGIST</p>
                                            <div class="revievs__container-contact">
                                                <a href="" class="revievs__item-tel">+998 (90) 123 - 45 - 67</a>
                                                <a href="" class="revievs__item-email">logistcompany@mail.com</a>
                                            </div>
                                            <div class="revievs__container-star">
                                                <ul>
                                                    <li v-for="star in 5" :key="star">
                                                        <img src="@/assets/images/revievs/icons/star1.png" alt="Star" class="revievs__star">
                                                    </li>
                                                </ul>
                                            </div>
                                            <p class="revievs__item-text">Я хотел бы выразить искреннюю благодарность за ваше профессиональное и эффективное обслуживание. Воспользовавшись вашими услугами для таможенного оформления нашей компании, я был приятно удивлен результатами.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="revievs__container-button">
                        <li class="revievs__link"><router-link to="/comments"> Больше отзывов</router-link></li>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>