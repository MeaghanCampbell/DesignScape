<script setup>
    import SpotlightCard from "@/components/SpotlightCard.vue"
</script>

<template>
  <div class="flex items-center justify-center">
    <SpotlightCard
      from="#f0abfc"
      via="#7dd3fc"
      :size="300"
      class="w-full max-w-2xl rounded-[--radius] bg-white/10 p-8 [--radius:theme(borderRadius.2xl)]">
      <div class="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-gradient-to-br from-zinc-800 to-zinc-700"></div>

      <div class="relative">
        <div class="font-display text-lg font-semibold text-white md:text-2xl">
          Enhance your audio <br />
          with FlowTone now
        </div>
        <p class="mt-2 text-white/75 text-lg">random copy here</p>
      </div>
    </SpotlightCard>
  </div>
</template>
