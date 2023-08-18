<template>
  <section class="navbar">
    <div class="navbar__top">
        <div class="container">
            <div class="navbar__top-container">
                <div class="navbar__logo">
                    <img src="@/assets/images/navbar/logo/logo.png" alt="Logo" class="navbar__logo-img">
                </div>
                <div class="navbar__mail">
                    <a href="mailto:imper_active@mail.ru" class="navbar__mail-link">imper_active@mail.ru</a>
                </div>
                <div class="navbar__icon">
                    <ul class="navbar__icon-container">
                        <li v-for="icon in icons" :key="icon">
                            <a :href="icon.link"><img :src="icon.path" :alt="icon.name" class="navbar__icon-item"></a>
                        </li>
                    </ul>
                </div>
                <div class="navbar__laguage">
                    <div class="navbar__laguage-item" ref="buttonLaguage" v-for="(laguage, index) in laguages" 
                    :key="laguage" @click="toggleLaguageButton(index)">
                        <img :src="laguage.flag" alt="Russia" class="navbar__laguage-flag">
                        <p class="navbar__laguage-text">{{ laguage.country }}</p>
                        <img v-if="index === 0" src="@/assets/images/navbar/icons/arrow.png" alt="arrow" class="navbar__laguage-icon">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar__bottom">
        <div class="navbar__bottom-container">
            <div class="container">
                <nav class="navbar__nav">
                    <ul class="navbar__nav-ul">
                        <li v-for="link in links" :key="link">
                            <a :href="`http://localhost:5000/${link.path}`" class="navbar__link">{{ link.name }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="navbar__mobile">
        <div class="navbar__mobile-top">
            <div class="container">
                <div class="navbar__mobile-container">
                    <div class="navbar__logo">
                        <img src="@/assets/images/navbar/logo/logo.png" alt="Logo" class="navbar__logo-img">
                    </div>
                    <div class="navbar__burgermenu">
                        <ul class="navbar__burgermenu-container" ref="button" @click="toggleNavbar()">
                            <li class="navbar__burgermenu-line" v-for="line of 3" :key="line" ref="line"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar__mobile-bottom" ref="modal">
            <nav>
                <ul class="nvabar__mobile-container">
                    <li v-for="link in links" :key="link">
                        <a :href="`http://localhost:5000/${link.path}`" @click="history.pushState(null, null, '/')" class="navbar__link">{{ link.name }}</a>
                    </li>
                </ul>
            </nav>
            <div class="navbar__text-container">
                <ul>
                    <li v-for="icon in icons" :key="icon">
                        <a href="" class="nvabar__icon-item"><img :src="icon.path" :alt="icon.name"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data: () => ({
        icons: [
            {
                name: 'whatsapp',
                path: require('@/assets/images/navbar/icons/whatsapp.png'),
                link: 'https://api.whatsapp.com/send?phone=998977536912'
            },
            {
                name: 'telegram',
                path: require('@/assets/images/navbar/icons/telegram.png'),
                link: 'https://t.me/imper_active'
            },
            {
                name: 'instagram',
                path: require('@/assets/images/navbar/icons/instagram.png'),
                link: ''
            },
            {
                name: 'gmail',
                path: require('@/assets/images/navbar/icons/gmail.png'),
                link: ''
            }
        ],

        laguages: [
            {
                country: 'Русский',
                flag: require('@/assets/images/navbar/country/russia.png'),
            },
            {
                country: 'Узбекча',
                flag: require('@/assets/images/navbar/country/uzbek.png'),
            },
            {
                country: `O'zbekcha`,
                flag: require('@/assets/images/navbar/country/uzbek.png'),
            }
        ],

        links: [
            {
                name: 'Главная',
                path: '#index'
            },
            {
                name: 'Компания',
                path: '#about'
            },
            {
                name: 'Наши преимущества',
                path: '#advantages'
            },
            {
                name: 'Услуги',
                path: '#services'
            },
            {
                name: 'Физическим лицам',
                path: '#fac-fisics'
            },
            {
                name: 'Юридическим лицам',
                path: '#fac-yurist'
            },
            {
                name: 'Отзывы',
                path: '#revievs'
            },
            {
                name: 'Контакты',
                path: '#contacts'
            },
        ]
    }),

    methods: {
        toggleNavbar () {
            const buttonState = 'active__button';
            const modalState = 'active__modal';
            const lineState = 'active__line';

            let modal = this.$refs.modal;
            let lines = this.$refs.line;
            let button = this.$refs.button;

            button.classList.toggle(buttonState);
            modal.classList.toggle(modalState);

            lines.forEach(element => element.classList.toggle(lineState));
        },

        toggleLaguageButton (index) {
            const buttonState = 'navbar__laguage-item-active';
            let button = this.$refs.buttonLaguage;

            if (index === 0) {
                button.forEach((element, index) => {
                    if (index > 0) {
                        element.classList.toggle(buttonState);
                    }
                })
            }
        } 
    }
}
</script>
