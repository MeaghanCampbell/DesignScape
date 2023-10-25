<script setup>
import MotionText from "@/components/MotionText.vue"
import ScrollReveal from "@/components/ScrollReveal.vue"

const text = "How you design and build matters."
</script>

<template>
  <div class="pt-0">

    <ScrollReveal
      v-slot="{ isActive }"
      mode="middle"
      class="mx-auto flex max-w-2xl items-center justify-center">
      <MotionText v-slot="{ tokens }" :body="text" mode="symbol">
        <h1 class="text-center text-xl sm:text-3xl md:text-4xl font-bold text-white">
          <span
            v-for="(token, index) in tokens"
            :key="index"
            :style="{
              '--delay': `${index * 20}ms`,
            }"
            :class="{
              'translate-y-8 opacity-0': !isActive,
              'delay-[--delay]': isActive,
            }"
            class="inline-block whitespace-pre-wrap transition-[transform,opacity] duration-150">
            {{ token }}
          </span>
        </h1>
      </MotionText>
    </ScrollReveal>
  </div>
</template>
