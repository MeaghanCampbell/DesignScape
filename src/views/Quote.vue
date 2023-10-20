<script setup>
import MotionTextTemplate from '../components/MotionTextTemplate.vue'

</script>
<template>
    <div class="bg-gradient-to-br from-sky-300/20 to-fuchsia-300/30">
        <section class="max-w-6xl mx-auto">
            <div class="relative bg-white/2.5 py-14 px-4 md:rounded-3xl lg:rounded-[3rem] sm:px-8 sm:py-28">
                <div class="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950">
                    <div class="h-1.5 w-8 rounded-lg bg-white"></div>
                </div>
                <div class="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-950">
                    <div class="h-1.5 w-8 rounded-lg bg-white"></div>
                </div>
                <div>
                    <MotionTextTemplate />
                </div>
            </div>
        </section>
    </div>
</template>