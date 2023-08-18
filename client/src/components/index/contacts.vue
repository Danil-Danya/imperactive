<template>
    <section class="contacts" id="contacts">
        <div class="contacts__container">
            <div class="container">
                <div class="contacts__content-title">
                    <h2 class="contacts__title title">Контакты</h2>
                </div>
                <div class="contacts__content">
                    <div class="contacts__left">
                        <a href="imper_active@mail.ru" class="contacts__link">Наша почта: imper_active@mail.ru</a>
                        <a href="tel:+998981156115" class="contacts__link">Наш телефон: +998 (98) 1156115</a>
                        <p class="contacts__text">Наша адрес: город Ташкент, Мирзоулугбекский район, проспект Алишера Навои 3А</p>
                        <div class="contacts__icon-container">
                            <ul>
                                <li v-for="icon in icons" :key="icon">
                                    <a :href="icon.link"><img :src="icon.path" :alt="icon.name" class="contacts__icon"></a>
                                </li>
                            </ul>
                        </div>
                        <p class="contacts__text">Мы всегда открыты с 9:00 - 18:00</p>
                        <p class="contacts__text">Обратите внимание что часы работы могут меняться по выходным</p>
                    </div>
                    <div class="contacts__right">
                        <form action="/api/telegram-bot-api" class="contacts__form">
                            <div class="contacts__input-container">
                                <input type="text" ref="name" name="name" placeholder="Ваше имя" class="contacts__input">
                                <input type="number" ref="number" name="tel" placeholder="Ваш телефон" class="contacts__input">
                                <select name="order" class="contacts__select contacts__input">
                                    <option value="Уникальное">Уникальное</option>
                                </select>
                                <textarea name="message" ref="message" placeholder="Ваше сообщение" class="contacts__input contacts__message" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button name="send" class="contacts__button" @click="sendMessageToServer()" type="button">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';
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
    }),

    methods: {
        async sendMessageToServer () {
            const URL = '/api/telegram-bot-api';

            const data = {
                name: this.$refs.name.value,
                number: this.$refs.number.value,
                message: this.$refs.message.value,
            }

            console.log(data);

            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    console.log('Данные успешно отправлены');
                    location. reload()
                } 
                else {
                    console.error('Ошибка при отправке данных');
                }
            } 
            catch (error) {
                console.error('Ошибка:', error);
            }
        }
    }
}

</script>