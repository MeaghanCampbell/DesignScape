<script setup>
    import SpotlightCard from "@/components/SpotlightCard.vue"
</script>

<template>
  <div class="flex items-center justify-center">
    <SpotlightCard
      from="#f0abfc"
      via="#7dd3fc"
      size="300"
      class="w-full max-w-2xl rounded-[--radius] bg-white/10 p-8 [--radius:theme(borderRadius.2xl)]">
      <div class="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-gradient-to-br from-zinc-800 to-zinc-700"></div>

      <div class="relative">
        <div class="font-display text-lg font-semibold text-white md:text-2xl">
          Enhance your audio <br />
          with FlowTone now
        </div>

        <a
          href="#"
          class="group mt-4 inline-flex items-center gap-2 rounded-lg bg-white/5 px-5 py-2.5 font-display text-xs font-medium tracking-wide text-white transition hover:bg-white/10 md:mt-8">
          <span class="relative">Download app</span>

          <span class="relative h-5 w-px bg-white/10"></span>

          <span
            class="group-hover relative mt-px font-display font-medium text-white/50 transition duration-300 group-hover:text-white/100">
            $49
          </span>
        </a>
      </div>
    </SpotlightCard>
  </div>
</template>
