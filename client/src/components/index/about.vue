<template>
    <section class="about" id="about">
        <div class="about__container">
            <div class="about__left">
                <img src="@/assets/images/about/about.png" alt="about" class="about__img">
            </div>
            <div class="about__right">
                <div class="about__content">
                    <h2 class="about__title">О нашей компании</h2>
                    <p class="about__text">Добро пожаловать в нашу компанию таможенного оформления! Мы являемся ведущей организацией, специализирующейся на профессиональном таможенном оформлении и логистике. Наша команда опытных специалистов обеспечивает эффективное и надежное таможенное оформление грузов для наших клиентов.</p>
                    <p class="about__text">Мы понимаем, что в современном бизнесе таможенные процессы могут быть сложными и времязатратными. Поэтому наша цель - предоставить простые и эффективные решения для наших клиентов. Мы предлагаем полный спектр услуг, включая консультации, оценку стоимости, таможенное оформление и организацию логистики.</p>
                    <span><img src="@/assets/images/about/stamp.png" alt="Stamp" class="about__stamp"></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { aboutAnimationLeft, aboutAnimationRight } from '@/scripts/greensock';


export default {
    mounted () {
        aboutAnimationLeft();
        aboutAnimationRight();
    }
}

</script>