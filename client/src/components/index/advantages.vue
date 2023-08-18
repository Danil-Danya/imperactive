<template>
    <section class="advantages" id="advantages">
        <div class="advantages__container">
            <div class="advantages__item" v-for="item in items" :key="item" :style="{ background: 'url(' + item.img + ') no-repeat center center /cover' }">
                <div class="advantages__item-container">
                    <h3 class="advantages__title">{{ item.title }}</h3>
                    <p class="advantages__text">{{ item.text }}</p>
                    <snan class="advantages__line"></snan>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { advantagesAnimation } from '@/scripts/greensock';

    export default {
        data: () => ({
            items: [
                {
                    img: require('@/assets/images/advantages/car.png'),
                    imgName: 'Car',
                    title: 'ПРОФЕССИОНАЛИЗМ',
                    text: 'Наша команда состоит из опытных специалистов в области таможенного оформления. Мы тщательно следим за последними изменениями в законодательстве и таможенных правилах, чтобы гарантировать правильное оформление грузов и минимизировать риски для клиентов.'
                },
                {
                    img: require('@/assets/images/advantages/airfly.png'),
                    imgName: 'Airfly',
                    title: 'НАДЕЖНОСТЬ',
                    text: 'Мы ценим доверие наших клиентов и обеспечиваем прозрачность и надежность во всех наших операциях. Мы придерживаемся высоких стандартов качества и безопасности, чтобы обеспечить сохранность ваших грузов.'
                },
                {
                    img: require('@/assets/images/advantages/stock.png'),
                    imgName: 'Stock',
                    title: 'ИНДИВИДУАЛЬНОСТЬ',
                    text: 'Мы понимаем, что каждый бизнес имеет свои уникальные потребности. Мы проводим детальный анализ вашей ситуации и разрабатываем наиболее эффективные решения, которые соответствуют вашим целям и бюджету.'
                }
            ]
        }),

        mounted () {
            advantagesAnimation();
        }
    }

</script>