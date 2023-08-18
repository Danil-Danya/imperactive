<template>
    <header class="header">
        <index></index>
    </header>
    <main class="main">
        <advantages></advantages>
        <about></about>
        <services></services>
        <faqFisics></faqFisics>
        <poetry></poetry>
        <faqYurist></faqYurist>
        <revievs></revievs>
        <contacts></contacts>
        <maps></maps>
    </main>
</template>

<script>
import index from '../components/index/header.vue';
import advantages from '../components/index/advantages.vue';
import about from '../components/index/about.vue';
import services from '@/components/index/services.vue';
import faqFisics from '@/components/index/faq-fisics.vue';
import poetry from '@/components/index/poetry.vue';
import faqYurist from '@/components/index/faq-yurist.vue';
import revievs from '@/components/index/revievs.vue';
import contacts from '@/components/index/contacts.vue';
import maps from '@/components/index/map.vue';

export default {
    components: {
        index,
        advantages,
        about,
        services,
        faqFisics,
        poetry,
        faqYurist,
        revievs,
        contacts,
        maps
    }
}

</script>