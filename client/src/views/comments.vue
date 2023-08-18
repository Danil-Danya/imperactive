<template>
    <main>
        <formcom></formcom>
        <revievs></revievs>
    </main>
</template>

<script>
    import formcom from '@/components/comments/form.vue';
    import revievs from '@/components/comments/revievs.vue';

    export default {
        components: {
            formcom,
            revievs
        }
    }

</script>