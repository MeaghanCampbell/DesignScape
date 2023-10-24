<script setup>
    import ScrollReveal from "@/components/ScrollReveal.vue"
    import Card from "@/components/Card.vue"

    import { ref } from 'vue'

    const cards = ref([
        { header: 'Header 1', body: 'Body 1' },
        { header: 'Header 2', body: 'Body 2' },
        { header: 'Header 3', body: 'Body 3' },
        { header: 'Header 4', body: 'Body 4' },
        { header: 'Header 5', body: 'Body 5' },
        { header: 'Header 6', body: 'Body 6' },
    ])
</script>

<template>
    <div class="py-14 sm:py-28 px-4 sm:px-8 max-w-6xl mx-auto">
        <ScrollReveal v-slot="{ isActive }" :offset="200" class="[--duration:500ms]">

            <div
              :class="{ 'translate-y-8 opacity-0': !isActive }"
              class="flex justify-center transition-[transform,opacity] duration-[--duration]">
              <div class="rounded-full border border-sky-400 px-4 py-0.5 text-sm text-white">
                Features
              </div>
            </div>

            <h2
              :class="{ 'translate-y-8 opacity-0': !isActive }"
              class="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6 text-center transition-[transform,opacity] duration-[--duration]">
              FlowTone does it all
            </h2>

            <h3
              :class="{ 'translate-y-8 opacity-0': !isActive }"
              class="mt-4 text-center text-white/75 transition-[transform,opacity] duration-[--duration] text-lg">
              Drop your file onto FlowTone and we'll enhance it.
              <br class="hidden md:block" />
              No need to separate audio from video.
            </h3>

            <div class="mt-6 transition-[transform,opacity] duration-[--duration] md:mt-12">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card
                        v-for="(card, index) in cards"
                        :key="index"
                        :header="card.header"
                        :body="card.body"
                        :style="{ '--delay': `${(index + 1) * 250}ms` }"
                        :class="{
                          'translate-y-8 opacity-0': !isActive,
                          'delay-[--delay]': isActive,
                        }"
                        class="transition-[transform,opacity] duration-[--duration]" 
                    />
                </div>
            </div>

        </ScrollReveal>
    </div>
</template>