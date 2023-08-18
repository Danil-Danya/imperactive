<template>
    <section class="poetry">
        <div class="poetry__container">
            <div class="container">
                <div class="poetry__content">
                    <h2 class="poetry__title title">Немного поэзии</h2><p class="poetry__text">Устали? В этой секции вы можете почитать стихотворение что приготовила наша команда. Мы хотим показать этим нестандарнтый подход и креативное мышеление.</p>
                </div>
                <div class="poetry__content-container">
                    <div class="poetry__item" v-for="poet in poetry" :key="poet">
                        <img :src="poet.img" alt="Image" class="poetry__img">
                        <div class="poetry__container-text">
                            <p class="poetry__item-text" v-for="string in poet.text" :key="string">{{ string }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { poetryAnimation } from '@/scripts/greensock';

    export default {
        data: () => ({
            poetry: [
                {
                    img: require('@/assets/images/poetry/image1.png'),
                    text: [
                        'Imper Active - всегда позитив!',
                        'Работаем слажено.',
                        'У нас все налажено!',
                        'И доки проверим,',
                        'контракт зареганим.'
                    ]
                },
                {
                    img: require('@/assets/images/poetry/image2.png'),
                    text: [
                        'Сертификация тоже за нами', 
                        'Досмотр проведем,',
                        'И Ваш груз растаможим,',
                        'А если и надо то и затаможим!',
                    ]
                },
                {
                    img: require('@/assets/images/poetry/image3.png'),
                    text: [
                        'Приходите в гости к нам',
                        'Будем очень рады Вам,',
                        'Гаплашамиз, утирамиз,',
                        'Четкий маслахат берамиз'
                    ]
                },
                {
                    img: require('@/assets/images/poetry/image4.png'),
                    text: [
                        'Код законный подберем,',
                        'Чаю, кофейку нальем,',
                        'Ориентир наш очень прост,',
                        'Аэропорт, Корзинка, мост,'
                    ]
                },
                {
                    img: require('@/assets/images/poetry/image5.png'),
                    text: [
                        'Бизнес-центр CITY LINE,',
                        'Саид для Вас всегда онлайн,',
                        'Клиентов мы ценим и уважаем,',
                        'Всегда и везде во всем помогаем,',
                        'Еще скажу я Вам одно,',
                        'Таможня нам дает добро!',
                    ]
                }
            ]
        }),
        mounted () {
            poetryAnimation();
        }
    }
</script>