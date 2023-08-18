<template>
    <div class="header__container" id="index">
        <div class="container">
            <div class="header__content">
                <h1 class="header__title">IMPER ACTIVE</h1>
                <h2 class="header__title title-mini">ТАМОЖЕННОЕ ОФОРМЛЕНИЕ</h2>
                <div class="header__container-button">
                    <a href="http://localhost:5000/#about" class="header__button">Начать</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { headerAnimation } from '@/scripts/greensock';


export default {
    mounted () {
        headerAnimation();
    }
}

</script>