<template>
  <character-page />
</template>

<script>
import { computed, useStore } from '@nuxtjs/composition-api'
export default {
  setup() {
    const store = useStore()
    const title = computed(() => store.state.marvelCharacterDetails?.name)
    return {
      title,
    }
  },
  head() {
    return {
      title: `${this.title} - Marvel Characters`,
    }
  },
}
</script>
