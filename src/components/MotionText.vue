<script setup>
import { computed } from "vue"

const props = defineProps({
  as: {
    type: String,
    default: "div",
  },
  body: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    default: "symbol",
    validator: (prop) => ["symbol", "word"].includes(prop),
  },
})

const tokens = computed(() => {
  if (props.mode == "symbol") {
    return props.body.trim().split("")
  }

  return props.body.trim().match(/\S+|\s+/g) || []
})
</script>

<template>
  <component :is="as">
    <slot :tokens="tokens" />
  </component>
</template>
