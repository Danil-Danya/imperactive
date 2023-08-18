<template>
    <section class="fisics">
        <div class="fisics__container" id="fac-fisics">
            <div class="container">
                <div class="fisics__content">
                    <h2 class="fisics__title title">Физическим лицам</h2>
                    <div class="fisics__accordion" ref="accordion">
                        <div class="fisics__item" v-for="qusetion in getFisicsQuestions" 
                        :key="qusetion" ref="accordionItems" @click="accordione.toggleAccordion(qusetion.question)">
                            <span class="fisics__border"></span>
                            <h3 class="fisics__question">{{ qusetion.question }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import acordion from '@/scripts/accordion.js'

export default {
    data: () => ({
        accordione: ''
    }),
    computed: mapGetters(['getFisicsQuestions']),
    mounted () {
        const width = 600;

        this.accordione = new acordion({
            accordion: this.$refs.accordion,
            accordionItems: this.$refs.accordionItems,
            accordionList: this.getFisicsQuestions,
            elementSymbol: 30
        });

        this.accordione.correctWidthInItem(width);

        //console.log(this.accordione.accordionItems);
    }
}

</script>