<template>
    <section class="revievs">
        <div class="revievs__container">
            <div class="container">
                <div class="revievs__content">
                    <h2 class="revievs__title title" id="revievs">Наши отзывы</h2>
                    <p class="revievs__text">Мы гордимся отзывами наших клиентов и ценим их доверие. Для нас важно, чтобы каждый клиент чувствовал себя уверенно и комфортно в сотрудничестве с нами. Мы стремимся предоставить высокий уровень профессионализма и надежности во всех наших услугах. </p>
                </div>
                <div class="revievs__container-all" v-for="comments in getComments" :key="comments">
                    <div v-if="comments.state === 'permitted'">
                        <div class="revievs__container-slider">
                            <div class="revievs__slider slider">
                                <div class="revievs__slider-line slider-line">
                                    <div class="revievs__item slider__item">
                                        <div class="revievs__item-container">
                                            <div class="revievs__item-right revievs__item-comment">
                                                <h3 class="revievs__item-title">{{ comments.firstName }} {{ comments.lastName }}</h3>
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
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
        computed: mapGetters(['getComments']),
        methods: mapActions(['fetchCommentaries']),
        mounted () { this.fetchCommentaries() }
  }

</script>