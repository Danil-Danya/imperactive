<template>
    <div class="yuristic">
        <div class="yuristic__container" id="fac-yurist">
            <div class="container">
                <div class="yuristic__content">
                    <h2 class="yuristic__title title">Юридическим лицам</h2>
                    <div class="yuristic__accordion" ref="accordion">
                        <div class="yuristic__item" v-for="qusetion in getYuristicQuestion" 
                        :key="qusetion" ref="accordionItems" @click="accordione.toggleAccordion(qusetion.question)">
                            <span class="yuristic__border"></span>
                            <h3 class="yuristic__question">{{ qusetion.question }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import acordion from '@/scripts/accordion.js'

export default {
    data: () => ({
        accordione: ''
    }),
    computed: mapGetters(['getYuristicQuestion']),
    mounted () {
        const width = 600;

        this.accordione = new acordion({
            accordion: this.$refs.accordion,
            accordionItems: this.$refs.accordionItems,
            accordionList: this.getYuristicQuestion,
            elementSymbol: 0
        });

        this.accordione.correctWidthInItem(width);

        //console.log(this.accordione.accordionItems);
    }
}

</script>