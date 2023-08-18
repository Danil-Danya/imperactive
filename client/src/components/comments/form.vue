<template>
    <section class="revievs__form">
        <div class="container">
            <form action="/api/commentaries" class="revievs__form" ref="form">
                <div class="revievs__input-container">
                    <label class="revievs__label" for="">Ваше имя</label>
                    <input class="revievs__input" ref="firstName" type="text" placeholder="Обязательно">
                </div>
                <div class="revievs__input-container">
                    <label class="revievs__label" for="">Ваша фамилия</label>
                    <input class="revievs__input" ref="lastName" type="text" placeholder="Обязательно">
                </div>
                <div class="revievs__input-container">
                    <label class="revievs__label" for="">Ваш телефон</label>
                    <input class="revievs__input" ref="phone" type="number" placeholder="Не обязательно">
                </div>
                <div class="revievs__input-container">
                    <label class="revievs__label" for="">Ваша почта</label>
                    <input class="revievs__input" ref="email" type="text" placeholder="Обязательно">
                </div>
                <div class="revievs__input-container">
                    <label class="revievs__label" for="text">Ваш отзыв</label>
                    <textarea class="revievs__textarea" ref="text" type="text" placeholder="Обязательно"></textarea>
                    <div class="revievs__button-container">
                        <button class="revievs__button" type="button" @click="sendRevievToServer()">Отправить</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { Validator } from '@/scripts/validator';

export default {
    methods: {
        async sendRevievToServer () {
            const URL = '/api/commentaries';

            const data = {
                firstName: this.$refs.firstName.value,
                lastName: this.$refs.lastName.value,
                phone: this.$refs.phone.value,
                state: 'expectation',
                email: this.$refs.email.value,
                text: this.$refs.text.value
            }
            
            const validator = new Validator ({
                name: this.$refs.firstName,
                lastName: this.$refs.lastName,
                phone: this.$refs.phone,
                email: this.$refs.email,
                text: this.$refs.text
            })

            if (validator.allValidate()) {
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
                        location. reload();
                    }
                    else console.error('Ошибка при отправке данных');
                } 
                catch (error) {
                    console.error('Ошибка:', error);
                }
            }
            else return;
        }
    }
}

</script>