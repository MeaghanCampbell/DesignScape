<script setup>
  import Card from './views/Card.vue'
  import ScrollContainer from './views/ScrollContainer.vue'
  import Hero from './views/Hero.vue'
</script>

<template>
    <section class="">
        <Hero />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-8 py-14 sm:py-20 max-w-6xl mx-auto">
            <Card />
            <Card />
            <Card />
        </div>
        <div class="px-4 sm:px-8 pb-14 sm:pb-20 max-w-6xl mx-auto">
            <ScrollContainer />
        </div>
    </section>
</template>