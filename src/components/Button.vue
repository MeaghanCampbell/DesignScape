<script setup>
import SpotlightButton from "@/components/SpotlightButton.vue"
</script>

<template>
  <div class="">
    <SpotlightButton>
      <div class="relative inline-flex items-center gap-2">
        <span
          class="mt-px bg-gradient-to-b from-sky-300/50 to-sky-300 bg-clip-text font-mona text-lg font-medium text-transparent transition-all duration-200 [font-variation-settings:'wdth'_100] group-hover:font-extrabold group-hover:[font-variation-settings:'wdth'_125]">
          Buy now
        </span>

        <div class="h-5 w-px bg-white/10"></div>

        <div
          class="group-hover mt-0.5 font-mona text-lg font-medium text-sky-300/60 transition-all duration-300 [font-variation-settings:'wdth'_125] group-hover:text-shadow-sm">
          $49
        </div>
      </div>
    </SpotlightButton>
  </div>
</template>
