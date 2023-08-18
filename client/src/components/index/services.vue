<template>
    <section class="services" id="services">
        <div class="container">
            <div class="services__container">
                <div class="services__title-container">
                    <h2 class="services__title title">Услуги нашей компании</h2>
                </div>
                <div class="services__content">
                    <div class="services__item" v-for="services in servicesList" :key="services">
                        <img :src="services.imgPath" :alt="services.name" class="services__img">
                        <div class="services__item-container">
                            <h3 class="services__content-title">{{ services.title }}</h3>
                            <span class="services__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { servicesAnimation } from '@/scripts/greensock';


export default {
    data: () => ({
        servicesList: [
            {
                name: 'Constaling',
                title: 'Консалтинг по ВЭД',
                imgPath: require('@/assets/images/services/constaling.png')
            },
            {
                name: 'Registration',
                title: 'Составление и регистрация  контрактов в системе ЕИСВО',
                imgPath: require('@/assets/images/services/contracts.png')
            },
            {
                name: 'Sertification',
                title: 'Сертификация и получение иных документов',
                imgPath: require('@/assets/images/services/sertification.png')
            },
            {
                name: 'Decor',
                title: 'Таможенное оформление грузов',
                imgPath: require('@/assets/images/services/decor.png')
            },
            {
                name: 'KeyDecor',
                title: 'Таможенное оформление грузов “под ключ”',
                imgPath: require('@/assets/images/services/maintenance.png')
            },
            {
                name: 'Maintenance',
                title: 'Транспортно-экспедиторское обслуживание грузов',
                imgPath: require('@/assets/images/services/key-decor.png')
            },
            {
                name: 'Electric car',
                title: 'Поставка электромобилей,  под заказ из Китая',
                imgPath: require('@/assets/images/services/electro-car.png')
            },
            {
                name: 'Gibrid car',
                title: 'maintenance',
                imgPath: require('@/assets/images/services/gibrid-car.png')
            }
        ]
    }),

    mounted () {
        servicesAnimation();
    }
}

</script>