<template>
    <div class="adnin">
        <div class="container">
            <form action="" class="admin__form" ref="form">
                <div class="admin__input-container">
                    <label class="admin__label" for="">Ваш логин</label>
                    <input class="admin__input" ref="login" type="text">
                </div>
                <div class="admin__input-container">
                    <label class="admin__label" for="">Ваш логин</label>
                    <input class="admin__input" ref="password" type="password">
                </div>
                <button class="admin__button" type="button"
                @click="login">Войти</button>
            </form>
            <div class="admin__container" v-if="showAdminContainer">
                <div class="revievs__container-all" v-for="(comments, index) in getComments" :key="comments">
                    <div v-if="comments.state === 'expectation'">
                        <div class="revievs__container-slider">
                            <div class="revievs__slider slider">
                                <div class="revievs__slider-line slider-line">
                                    <div class="revievs__item slider__item">
                                        <div class="revievs__item-container">
                                            <div class="revievs__item-right revievs__item-comment">
                                                <h3 class="revievs__item-title" ref="name">{{ comments.firstName }} {{ comments.lastName }}</h3>
                                                <p class="revievs__item-person">Пользователь</p>
                                                <div class="revievs__container-contact">
                                                    <a :href="'tel:' + comments.telephone" class="revievs__item-tel">{{ comments.telephone }}</a>
                                                    <a :href="'mailto:' + comments.email" class="revievs__item-email">{{ comments.email }}</a>
                                                </div>
                                                <span class="revievs__line"></span>
                                                <p class="revievs__item-text">{{ comments.text }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="revievs__button-cotantainer">
                            <button type="button" ref="allow" class="revievs__button-admin" @click="updateComment(index)">Разрешить</button>
                            <button type="button" ref="delete" class="revievs__button-admin" @click="deleteComment(index)">Удалить</button>
                        </div>
                    </div>
                </div>
                <div class="admin__warning-container" v-if="!shouldShowWarning">
                    <h2 class="title">Уважаемая администрация сайта!</h2>
                    <p class="admin__warning-text">Хотелось бы извиниться за то, что на данный момент на нашем сайте отсутствуют комментарии от клиентов. Мы придаем большое значение вашему мнению и отзывам о нашей работе, и нам очень важно предоставить вам возможность делиться своим опытом.</p>
                    <p class="admin__warning-text">Спасибо за ваше понимание и поддержку.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { AdminLogin } from '@/scripts/admin-login';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        data: () => ({
            admin: '',
            showAdminContainer: false,
        }),
        computed: {
            ...mapGetters(['getComments']),
            shouldShowWarning() {
                return this.getComments.some(comment => comment.state === 'expectation');
            }
        },
        methods: {
            async login() {
                if (this.admin.checkForMatchPasswords()) {
                    this.admin.removeFormIfRightPassword(this.admin.checkForMatchPasswords());
                    this.showAdminContainer = true;
                }
                else {
                    this.admin.removeFormIfRightPassword();
                }
            },
            
            async deleteComment (index) {
                const url = '/api/commentaries';

                const data = {
                    action: 'delete',
                    id: this.getComments[index]._id,
                }

                console.log(data);

                const requestData = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                };

                try {
                    const response = await fetch(url, requestData);
                    
                    if (response.ok) {
                        console.log('Успешный PUT запрос'); 
                        this.getComments.splice(index, 1);
                    }
                    else console.error('Ошибка при выполнении PUT запроса');
                } 
                catch (error) {
                    console.error('Ошибка:', error);
                }
            },

            async updateComment (index) {
                const url = '/api/commentaries';

                const data = {
                    action: 'permitted',
                    id: this.getComments[index]._id,
                }

                const requestData = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                };

                try {
                    const response = await fetch(url, requestData);
                    this.getComments.splice(index, 1);
                    
                    if (response.ok) {
                        console.log('Успешный PUT запрос'); 
                    }
                    else console.error('Ошибка при выполнении PUT запроса');
                } 
                catch (error) {
                    console.error('Ошибка:', error);
                }
            },

            ...mapActions(['fetchCommentaries'])
        },
        mounted () {
            this.admin = new AdminLogin ({
                loginInput: this.$refs.login,
                passwordInput: this.$refs.password,
                form: this.$refs.form
            })
            
            this.fetchCommentaries();
            console.log(this.getComments);
        },
    }
</script>

<style lang="scss">
@import '@/assets/styles/common/fonts.scss';

.admin {
    padding: 200px 0;
    min-height: 100vh;

    &__container {
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    &__input {
        max-width: 500px;
        width: 100%;
        height: 50px;
        border: 3px solid #ff8a00;
        border-radius: 10px;
        margin-bottom: 30px;
        color: #000;
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding-left: 20px;

        &-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 685px;
            width: 100%;
        }
    }

    &__button {
        width: 200px;
        height: 60px;
        background: red;
        color: #fff;
        border: none;
        border-radius: 10px;
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        cursor: pointer;
        transition: background 500ms;

        &:hover {
            background: #000;
        }
    }

    &__label {
        color: #000;
        font-family: Roboto;
        font-size: 25px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
}

.revievs__button-admin {
    display: block;
    width: 50%;
    display: flex;
    height: 55px;
    justify-content: center;
    align-items: center;
    background: #221B1B;
    border-right: 1px solid #fff;
    color: #fff;
    &:hover {
        background: #e89f01ef;
        cursor: pointer;
    }
}

.revievs__button-cotantainer {
    display: flex;
    justify-content: space-between;
}

</style>