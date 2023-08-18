<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="container">
                <div class="footer__content">
                    <img src="@/assets/images/footer/logo.png" alt="Logo" class="footer__logo">
                    <a href="" class="footer__tel">+998 (98) 1156115</a>
                    <a href="" class="footer__email">imper_active@mail.ru</a>
                    <div class="footer__icon-container">
                        <ul>
                            <li v-for="icon in icons" :key="icon">
                                <a :href="icon.link"><img :src="icon.path" :alt="icon.name" class="footer__icons"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
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
    })
}

</script>